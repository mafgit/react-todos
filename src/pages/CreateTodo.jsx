import "../styles/CreateTodoList.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import { FaCheck } from "react-icons/fa";
import { FaX, FaXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";

const CreateTodo = ({ edit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const { todoLists, setTodoLists, saveTodoLists, getRandomId } =
    useContext(MainContext);
  const { id, tid } = useParams();

  useEffect(() => {
    if (edit) {
      for (let i = 0; i < todoLists.length; i++) {
        if (todoLists[i].id == id) {
          const { todos } = todoLists[i];
          for (let j = 0; j < todos.length; j++) {
            if (todos[j].id == tid) {
              setTitle(todos[j].title);
              setDate(todos[j].date);
            }
          }
        }
      }
    }
  }, [id, tid]);

  return (
    <form
      className="create-form main"
      onSubmit={(e) => {
        e.preventDefault();
        const lists = todoLists;

        if (!edit) {
          lists.forEach((list) => {
            if (list.id == id) {
              list.todos = [
                ...list.todos,
                {
                  completed: false,
                  date,
                  title,
                  id: getRandomId(),
                  listId: id,
                },
              ];
            }
          });
        } else {
          lists.forEach((list) => {
            if (list.id == id) {
              list.todos.forEach((todo) => {
                if (todo.id == tid) {
                  todo.title = title;
                  todo.date = date;
                }
              });
            }
          });
        }

        setTodoLists(lists);
        saveTodoLists(lists);
        navigate(-1);
      }}
    >
      <h1>{edit ? "Edit todo" : "Create a todo"}</h1>
      <hr />
      <div>
        <label htmlFor="title-input">Write your todo here</label>
        <input
          id="title-input"
          type="text"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div>
        <label htmlFor="date-input">Choose a date</label>
        <input
          id="date-input"
          type="date"
          required
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className="form-btns">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaXmark className="form-cancel-btn" />
        </button>
        <button type="submit">
          <FaCheck className="form-submit-btn" />
        </button>
      </div>
    </form>
  );
};

export default CreateTodo;
