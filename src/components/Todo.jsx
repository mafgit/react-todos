import {
  faEdit,
  faPen,
  faSquare,
  faSquareCheck,
  faTrash,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { MainContext } from "../App";
import { Link } from "react-router-dom";

const Todo = ({ title, id, listId, completed, date }) => {
  const { todoLists, setTodoLists, saveTodoLists } = useContext(MainContext);

  return (
    <div className={"todo" + (completed ? " completed-todo" : "")}>
      <FontAwesomeIcon icon={faUpDown} className="fa-up-down" />
      <FontAwesomeIcon
        className={`btn fa-square${completed ? " completed-square" : ""}`}
        icon={completed ? faSquareCheck : faSquare}
        onClick={() => {
          const newTodoLists = [...todoLists];
          newTodoLists.forEach((list) => {
            if (list.id == listId) {
              list.todos.forEach((todo) => {
                if (todo.id == id) {
                  todo.completed = !completed;
                  completed = !completed;
                }
              });
            }
          });

          setTodoLists(newTodoLists);
          saveTodoLists(newTodoLists);
        }}
      />
      <p>{title}</p>
      <p className="date">{date}</p>
      <FontAwesomeIcon
        icon={faTrash}
        className="btn trash-btn"
        onClick={() => {
          const newTodoLists = [...todoLists];
          // Must make a new array using ... so that setTodoLists actually changes the state

          for (let i = 0; i < newTodoLists.length; i++) {
            if (newTodoLists[i].id == listId) {
              newTodoLists[i].todos = newTodoLists[i].todos.filter(
                (t) => t.id != id
              );
            }
          }

          setTodoLists(newTodoLists);
          saveTodoLists(newTodoLists);
        }}
      />
      <Link to={`/todo-list/${listId}/edit-todo/${id}`}>
        <FontAwesomeIcon icon={faPen} className="btn pen-btn" />
      </Link>
    </div>
  );
};

export default Todo;
