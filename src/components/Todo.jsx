import {
  faSquare,
  faSquareCheck,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ title, id, completed, date }) => {
  return (
    <div className="todo">
      <FontAwesomeIcon icon={faUpDown} className="fa-up-down" />
      <FontAwesomeIcon
        icon={completed ? faSquareCheck : faSquare}
        className="fa-square"
      />
      <p>{title}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default Todo;
