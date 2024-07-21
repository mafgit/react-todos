import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CreateTodoList.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MainContext } from "../App";

const CreateTodoList = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const { todoLists, setTodoLists } = useContext(MainContext);

  return (
    <form
      className="create-form main"
      onSubmit={(e) => {
        e.preventDefault();
        const max = 1000000;
        const min = 2;

        setTodoLists([
          ...todoLists,
          {
            title: title,
            icon: "",
            todos: [],
            id: Math.floor(Math.random() * (max - min) + min),
          },
        ]);

        localStorage.setItem(
          "todo-lists",
          JSON.stringify([
            ...todoLists,
            {
              title: title,
              icon: "",
              todos: [],
              id: Math.floor(Math.random() * (max - min) + min),
            },
          ])
        );

        navigate(-1);
      }}
    >
      <h1>Create a todo list</h1>
      <hr />
      <div>
        <label htmlFor="title-input">Choose a name for the list</label>
        <input
          id="title-input"
          type="text"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="icon-input">Choose an icon</label>
        <input id="icon-input" type="button" />
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

export default CreateTodoList;
