import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../App";

const SidebarItem = ({ id, title, selected, icon }) => {
  const { icons } = useContext(MainContext);
  const [IconComp, setIconComp] = useState(() => icons[icon]);

  useEffect(() => {
    setIconComp(() => icons[icon]);
  }, [icon]);

  return (
    <Link
      className={"sidebar-item" + (selected ? " selected" : "")}
      to={`/todo-list/${id}`}
    >
      <IconComp className="icon" />
      <p className="color-black">{title}</p>
    </Link>
  );
};

export default SidebarItem;
