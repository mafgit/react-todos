import "../styles/CreateTodoList.css";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import { FaCheck, FaRocket } from "react-icons/fa";
import { FaX, FaXmark } from "react-icons/fa6";
import IconPicker from "../components/IconPicker";

const CreateTodoList = ({ edit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [icon, setIcon] = useState(0);
  const { todoLists, setTodoLists, saveTodoLists, getRandomId, icons } =
    useContext(MainContext);
  const { id } = useParams();
  const [iconPicker, setIconPicker] = useState(false);
  const [IconComp, setIconComp] = useState(() => icons[0]);

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

  useEffect(() => {
    setIconComp(() => icons[icon]);
    // passing arrow function necessary otherwise error
  }, [icon]);

  return (
    <form
      className="create-form main"
      onSubmit={(e) => {
        e.preventDefault();
        const lists = todoLists;
        const randomId = getRandomId();

        if (!edit) {
          const newTodoList = {
            title: title,
            icon: icon,
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
        {/* <input
            id="icon-input"
            type="button"
            onChange={(e) => setIcon(e.target.value)}
            value={icon}
          /> */}
        <div className="choose-icon-div">
          <IconComp className="icon" />
          <button
            id="icon-input"
            type="button"
            onClick={() => setIconPicker(!iconPicker)}
          >
            Choose an icon
          </button>
        </div>
      </div>

      {iconPicker && (
        <IconPicker setIcon={setIcon} setIconPicker={setIconPicker} />
      )}

      <div className="form-btns">
        <button
          type="button"
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

export default CreateTodoList;
