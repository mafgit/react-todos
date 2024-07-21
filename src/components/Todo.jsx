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

const Todo = ({ title, id, listId, completed, date }) => {
  const [done, setDone] = useState(completed);
  const { todoLists, setTodoLists } = useContext(MainContext);

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

          localStorage.setItem("todo-lists", JSON.stringify(todoLists));
        }}
      />
      <p>{title}</p>
      <p className="date">{date}</p>
      <FontAwesomeIcon icon={faTrash} className="btn trash-btn" />
      <FontAwesomeIcon icon={faPen} className="btn pen-btn" />
    </div>
  );
};

export default Todo;
