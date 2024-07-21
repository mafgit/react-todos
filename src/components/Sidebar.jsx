import { useContext } from "react";
import { MainContext } from "../App";
import SidebarItem from "./SidebarItem";
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { todoLists } = useContext(MainContext);
  return (
    <div className="sidebar">
      <h1 className="heading">React Todos</h1>

      <div className="sidebar-section">
        <div className="section-head">
          <h4>Todo</h4>
          <FontAwesomeIcon icon={faSortUp} />
        </div>

        {todoLists.map((list) => {
          return <SidebarItem key={list.id} id={list.id} title={list.title} />;
        })}

        <Link to="/create-todo-list" className="create-btn">
          <FontAwesomeIcon icon={faPlus} /> Create
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
