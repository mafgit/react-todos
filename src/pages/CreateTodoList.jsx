import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/CreateTodoList.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";

const CreateTodoList = ({ edit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [icon, setIcon] = useState("");
  const { todoLists, setTodoLists, saveTodoLists } = useContext(MainContext);
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

        if (!edit) {
          setTodoLists([
            ...lists,
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
              ...lists,
              {
                title: title,
                icon: "",
                todos: [],
                id: Math.floor(Math.random() * (max - min) + min),
              },
            ])
          );
        } else {
          lists.forEach((list) => {
            if (list.id == id) {
              list.title = title;
              list.icon = icon;
            }
          });
        }

        setTodoLists(lists);
        saveTodoLists(lists);
        navigate(-1);
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
        <input id="icon-input" type="button" value={icon} />
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
