import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarItem = ({ id, title, selected }) => {
  return (
    <Link
      className={"sidebar-item" + (selected ? " selected" : "")}
      to={`/todo-list/${id}`}
    >
      <FontAwesomeIcon className="icon" icon={faRocket} />
      <p>{title}</p>
    </Link>
  );
};

export default SidebarItem;
