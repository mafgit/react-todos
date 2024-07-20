import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarItem = ({ _id, name }) => {
  return (
    <Link className="sidebar-item" to={`/todolist/${_id}`}>
      <FontAwesomeIcon icon={faRocket} />
      <p>{name}</p>
    </Link>
  );
};

export default SidebarItem;
