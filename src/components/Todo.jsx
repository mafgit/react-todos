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
  const [done, setDone] = useState(completed);
  const { todoLists, setTodoLists, saveTodoLists } = useContext(MainContext);

  return (
    <div className={"todo" + (done ? " completed-todo" : "")}>
      <FontAwesomeIcon icon={faUpDown} className="fa-up-down" />
      <FontAwesomeIcon
        className={`btn fa-square${done ? " completed-square" : ""}`}
        icon={done ? faSquareCheck : faSquare}
        onClick={() => {
          setDone(!done);

          const lists = todoLists;
          lists.forEach((list) => {
            if (list.id == listId) {
              list.todos.forEach((todo) => {
                if (todo.id == id) {
                  todo.completed = !done;
                }
              });
            }
          });

          setTodoLists(lists);

          localStorage.setItem("todo-lists", JSON.stringify(lists));
          console.log(lists);
          // TODO: FIX ERROR tick in one list goes to other lists
        }}
      />
      <p>{title}</p>
      <p className="date">{date}</p>
      <FontAwesomeIcon
        icon={faTrash}
        className="btn trash-btn"
        onClick={() => {
          // TODO: not getting updated after deleting
          const lists = todoLists;
          for (let i = 0; i < lists.length; i++) {
            if (lists[i].id == listId) {
              const { todos } = lists[i];
              for (let j = 0; j < todos.length; j++) {
                if (todos[j].id == id) {
                  lists[i].todos.splice(j, 1);
                }
              }
            }
          }
          setTodoLists(lists);
          saveTodoLists(lists);
        }}
      />
      <Link to={`/todo-list/${listId}/edit-todo/${id}`}>
        <FontAwesomeIcon icon={faPen} className="btn pen-btn" />
      </Link>
    </div>
  );
};

export default Todo;
