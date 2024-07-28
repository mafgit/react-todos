import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import SidebarItem from "./SidebarItem";
import "../styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { FaPlus, FaRocket, FaSortUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

const Sidebar = ({ sidebarOpened, setSidebarOpened }) => {
  const { todoLists } = useContext(MainContext);
  const loc = useLocation();
  const [selected, setSelected] = useState("-1");

  // getting id from pathname
  useEffect(() => {
    if (loc.pathname.startsWith("/todo-list/") && loc.pathname.length > 11) {
      let i = 11;
      let id = "";

      while (i < loc.pathname.length && loc.pathname[i] != "/") {
        id += loc.pathname[i];
        i++;
      }

      setSelected(id);
    } else {
      setSelected("-1");
    }
  }, [loc.pathname]);

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          opened: {
            x: "0",
            display: "flex",
            transition: { ease: "easeInOut", duration: 0.3 },
          },
          closed: {
            x: "-100vh",
            display: "none",
            transition: { ease: "easeInOut", duration: 0.3 },
          },
        }}
        initial="opened"
        animate={sidebarOpened ? "opened" : "closed"}
        exit={{ display: "none" }}
        className="sidebar"
      >
        <Link to="/" className="heading-link">
          <h1 className="heading rocket">
            <FaRocket className="rocket" /> React Todos
          </h1>
        </Link>

        <FaXmark className="btn" onClick={() => setSidebarOpened(false)} />

        <div className="sidebar-section">
          <div className="section-head">
            <h4>Todo</h4>
            <FaSortUp />
          </div>

          {todoLists.map((list) => {
            return (
              <SidebarItem
                key={list.id}
                id={list.id}
                title={list.title}
                selected={list.id == selected}
              />
            );
          })}

          <Link to="/create-todo-list" className="create-btn">
            <FaPlus /> Create
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
