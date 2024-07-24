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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPlus,
  faRocket,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const location = useLocation();
  const { todoLists, setTodoLists, saveTodoLists } = useContext(MainContext);
  const [todoList, setTodoList] = useState([]);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    let found = false;

    if (todoLists.length) {
      todoLists.forEach((list) => {
        if (list.id == id) {
          setTodoList(list);
          found = true;
        }
      });
    }

    if (!found) {
      redirect("/invalid-path");
    }
  }, [id]);

  return (
    <div className="todo-list main">
      <div className="todo-list-head">
        <h1 className="todo-list-heading">
          <FontAwesomeIcon icon={faRocket} style={{ color: "red" }} />{" "}
          {todoList.title}
        </h1>
        <div className="todo-list-btns">
          {/* TODO: delete todo list */}
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-todo-list-btn btn"
            onClick={() => {
              const newTodoLists = todoLists.filter((list) => list.id != id);
              setTodoLists(newTodoLists);
              saveTodoLists(newTodoLists);
              nav("/");
            }}
          />
          <Link to={location.pathname + "/edit-todo-list"}>
            <FontAwesomeIcon icon={faPen} className="edit-todo-list-btn btn" />
          </Link>
          <Link to={location.pathname + "/create-todo"}>
            <FontAwesomeIcon icon={faPlus} className="create-todo-btn btn" />
          </Link>
        </div>
      </div>

      {todoList.todos?.map((todo) => {
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
      })}
    </div>
  );
};

export default TodoList;
