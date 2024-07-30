import "../styles/CreateTodoList.css";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import { FaCheck, FaRocket } from "react-icons/fa";
import { FaX, FaXmark } from "react-icons/fa6";
// import IconPicker from "../components/IconPicker";
import BgModal from "../components/BgModal";
import IconModal from "../components/IconModal";

const CreateTodoList = ({ edit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [iconIndex, setIconIndex] = useState(0);
  const { todoLists, setTodoLists, saveTodoLists, getRandomId, icons } =
    useContext(MainContext);
  const { id } = useParams();
  const [IconComp, setIconComp] = useState(() => icons[0]);
  const [bgModalOpen, setBgModalOpen] = useState(false);
  const [bgAns, setBgAns] = useState("");
  const [iconModalOpen, setIconModalOpen] = useState("");

  useEffect(() => {
    if (edit) {
      for (let i = 0; i < todoLists.length; i++) {
        if (todoLists[i].id == id) {
          setIconIndex(todoLists[i].icon);
          setTitle(todoLists[i].title);
          setBgAns(todoLists[i].bg);
        }
      }
    }
  }, [id]);

  useEffect(() => {
    setIconComp(() => icons[iconIndex]);
    // passing arrow function necessary otherwise error
  }, [iconIndex]);

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
            icon: iconIndex,
            todos: [],
            id: randomId,
            bg: bgAns,
          };

          setTodoLists([...lists, newTodoList]);
          saveTodoLists([...lists, newTodoList]);
        } else {
          lists.forEach((list) => {
            if (list.id == id) {
              list.title = title;
              list.icon = iconIndex;
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
            // onClick={() => setIconPicker(!iconPicker)}
            onClick={() => setIconModalOpen(true)}
          >
            Choose an icon
          </button>
        </div>
      </div>

      {/* {iconPicker && (
        <IconPicker setIcon={setIcon} setIconPicker={setIconPicker} />
      )} */}
      <IconModal
        closable={true}
        modalOpen={iconModalOpen}
        setIconIndex={setIconIndex}
        setModalOpen={setIconModalOpen}
      />

      <BgModal
        modalOpen={bgModalOpen}
        setModalOpen={setBgModalOpen}
        setAns={setBgAns}
        closable={true}
      />
      <div>
        <label htmlFor="icon-input">Choose a background</label>
        <div className="choose-icon-div">
          <img
            className="small-selected-bg"
            src={
              !edit
                ? `/assets/images/${bgAns == "" ? "bg1.jpg" : bgAns}`
                : "/assets/images/" + bgAns
            }
            alt="bg"
          />
          <button
            id="icon-input"
            type="button"
            onClick={() => setBgModalOpen(true)}
          >
            Choose a background
          </button>
        </div>
      </div>

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
