import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarItem = ({ id, title, selected }) => {
  return (
    <Link
      className={"sidebar-item" + (selected ? " selected" : "")}
      to={`/todo-list/${id}`}
    >
      <FaRocket className="icon" />
      <p>{title}</p>
    </Link>
  );
};

export default SidebarItem;
