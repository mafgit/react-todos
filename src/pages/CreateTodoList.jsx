import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CreateTodoList.css";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";

const CreateTodoList = ({ edit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [icon, setIcon] = useState("");
  const { todoLists, setTodoLists, saveTodoLists, getRandomId } =
    useContext(MainContext);
  const { id } = useParams();

  useEffect(() => {
    if (edit) {
      for (let i = 0; i < todoLists.length; i++) {
        if (todoLists[i].id == id) {
          setIcon(todoLists[i].icon);
          setTitle(todoLists[i].title);
        }
      }
    }
  }, [id]);

  return (
    <form
      className="create-form main"
      onSubmit={(e) => {
        e.preventDefault();
        const max = 1000000;
        const min = 2;
        const lists = todoLists;
        const randomId = getRandomId();

        if (!edit) {
          const newTodoList = {
            title: title,
            icon: "",
            todos: [],
            id: randomId,
          };

          setTodoLists([...lists, newTodoList]);
          saveTodoLists([...lists, newTodoList]);
        } else {
          lists.forEach((list) => {
            if (list.id == id) {
              list.title = title;
              list.icon = icon;
            }
          });

          setTodoLists(lists);
          saveTodoLists(lists);
        }

        if (edit) {
          navigate(-1);
        } else {
          // redirect("/todo-list/" + randomId);
          navigate("/todo-list/" + randomId);
        }
      }}
    >
      <h1>{!edit ? "Create a todo list" : "Editing todo list"}</h1>
      <hr />
      <div>
        <label htmlFor="title-input">Title of the list</label>
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
        <label htmlFor="icon-input">Choose an icon</label>
        <input
          id="icon-input"
          type="button"
          onChange={(e) => setIcon(e.target.value)}
          value={icon}
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

export default CreateTodoList;
