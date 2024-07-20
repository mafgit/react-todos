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

const Sidebar = () => {
  const { todoLists } = useContext(MainContext);
  return (
    <div className="sidebar">
      <h1 className="heading">Webapp</h1>

      <div className="sidebar-section">
        <div className="section-head">
          <h4>Todo</h4>
          <FontAwesomeIcon icon={faSortUp} />
        </div>

        {todoLists.map((list) => {
          return <SidebarItem key={list.id} _id={list.id} name={list.name} />;
        })}

        <button>
          <FontAwesomeIcon icon={faPlus} /> Create
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
