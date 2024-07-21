import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarItem = ({ id, title }) => {
  return (
    <Link className="sidebar-item" to={`/todo-list/${id}`}>
      <FontAwesomeIcon icon={faRocket} />
      <p>{title}</p>
    </Link>
  );
};

export default SidebarItem;
