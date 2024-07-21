import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CreateTodoList.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MainContext } from "../App";

const CreateTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const { todoLists, setTodoLists } = useContext(MainContext);
  const { id } = useParams();

  return (
    <form
      className="create-form main"
      onSubmit={(e) => {
        e.preventDefault();
        const max = 1000000;
        const min = 2;

        const lists = todoLists;
        lists.forEach((list) => {
          if (list.id == id) {
            list.todos = [
              ...list.todos,
              {
                completed: false,
                date,
                title,
                id: Math.floor(Math.random() * (max - min) + min),
              },
            ];
          }
        });

        setTodoLists(lists);

        localStorage.setItem("todo-lists", JSON.stringify(lists));

        navigate(-1);
      }}
    >
      <h1>Create a todo</h1>
      <hr />
      <div>
        <label htmlFor="title-input">Write your todo here</label>
        <input
          id="title-input"
          type="text"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date-input">Choose a date</label>
        <input
          id="date-input"
          type="date"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-btns">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <FontAwesomeIcon icon={faClose} className="form-cancel-btn" />
        </button>
        <button type="submit">
          <FontAwesomeIcon icon={faCheck} className="form-submit-btn" />
        </button>
      </div>
    </form>
  );
};

export default CreateTodo;
