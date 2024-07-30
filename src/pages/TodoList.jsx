import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import {
  Link,
  useParams,
  useLocation,
  useNavigate,
  redirect,
} from "react-router-dom";
import Todo from "../components/Todo";
import "../styles/TodoList.css";
import EmptyList from "../components/EmptyList";
import { FaRocket, FaPen, FaPlus, FaTrash } from "react-icons/fa";
import Modal from "../components/Modal";
// import bgImg from "/images/bg1.jpg";

const TodoList = () => {
  const location = useLocation();
  const { todoLists, setTodoLists, saveTodoLists, icons } =
    useContext(MainContext);
  const [todoList, setTodoList] = useState({});
  const { id } = useParams();
  const nav = useNavigate();
  const [Icon, setIcon] = useState(() => icons[0]);
  // passing arrow function necessary otherwise error
  const [modalOpen, setModalOpen] = useState(false);
  const [ans, setAns] = useState(false);

  useEffect(() => {
    let found = false;
    setTodoList({});

    if (todoLists.length) {
      todoLists.forEach((list) => {
        if (list.id == id) {
          // console.log(list);
          setTodoList(list);
          found = true;
          setIcon(() => icons[list.icon]);
          // passing arrow function necessary otherwise error
        }
      });
    }

    if (!found) {
      nav("/invalid-path");
    }
  }, [id, todoLists, icons, nav]);

  return (
    <div className="todo-list main">
      <Modal
        closable={false}
        setAns={setAns}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        onYes={() => {
          const newTodoLists = todoLists.filter((list) => list.id != id);
          setTodoLists(newTodoLists);
          saveTodoLists(newTodoLists);
          nav("/");
        }}
      />
      <div className="bg">
        <img src="/assets/images/bg1.jpg" alt="bg" />
        <div className="todo-list-head">
          <h1 className="todo-list-heading color-white">
            <Icon className="icon" />
            {/* <FontAwesomeIcon icon={faRocket} style={{ color: "red" }} />{" "} */}
            {todoList.title}
          </h1>
          <div className="todo-list-btns">
            <FaTrash
              className="delete-todo-list-btn btn"
              onClick={() => {
                setModalOpen(true);
              }}
            />
            <Link to={location.pathname + "/edit-todo-list"}>
              <FaPen className="edit-todo-list-btn btn" />
            </Link>
            <Link to={location.pathname + "/create-todo"}>
              <FaPlus className="create-todo-btn btn" />
            </Link>
          </div>
        </div>
      </div>
      {todoList.todos && todoList.todos.length ? (
        todoList.todos?.map((todo) => {
          return (
            <Todo
              title={todo.title}
              completed={todo.completed}
              key={todo.id}
              id={todo.id}
              date={todo.date}
              listId={todoList.id}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default TodoList;
