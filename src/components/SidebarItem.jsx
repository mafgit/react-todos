import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../App";

const SidebarItem = ({ id, title, selected, icon }) => {
  const { icons } = useContext(MainContext);

  const Icon = icons[icon];

  return (
    <Link
      className={"sidebar-item" + (selected ? " selected" : "")}
      to={`/todo-list/${id}`}
    >
      <Icon className="icon" />
      <p className="color-black">{title}</p>
    </Link>
  );
};

export default SidebarItem;
