import { useContext, useState } from "react";
import { MainContext } from "../App";
import { Link } from "react-router-dom";
import { FaSquareCheck, FaUpDown } from "react-icons/fa6";
import { FaPen, FaSquare, FaTrash } from "react-icons/fa";

const Todo = ({ title, id, listId, completed, date }) => {
  const { todoLists, setTodoLists, saveTodoLists } = useContext(MainContext);

  const handleClick = () => {
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
  };

  return (
    <div className={"todo" + (completed ? " completed-todo" : "")}>
      <FaUpDown className="fa-up-down" />
      {!completed ? (
        <FaSquare
          className={`btn fa-square${completed ? " completed-square" : ""}`}
          onClick={handleClick}
        />
      ) : (
        <FaSquareCheck
          className={`btn fa-square${completed ? " completed-square" : ""}`}
          onClick={handleClick}
        />
      )}
      <p>{title}</p>
      <p className="date">{date}</p>
      <FaTrash
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
        <FaPen className="btn pen-btn" />
      </Link>
    </div>
  );
};

export default Todo;
