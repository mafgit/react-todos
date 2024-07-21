import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import { Link, useParams, useLocation } from "react-router-dom";
import Todo from "../components/Todo";
import "../styles/TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRocket } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const location = useLocation();
  const { todoLists } = useContext(MainContext);
  const [todoList, setTodoList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    todoLists.length &&
      todoLists.forEach((list) => {
        if (list.id == id) {
          setTodoList(list);
        }
      });
  }, [id]);

  return (
    <div className="todo-list main">
      <div className="todo-list-head">
        <h1 className="todo-list-heading">
          <FontAwesomeIcon icon={faRocket} /> {todoList.title}
        </h1>
        <Link to={location.pathname + "/create-todo"}>
          <FontAwesomeIcon icon={faPlus} className="create-todo-btn btn" />
        </Link>
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
