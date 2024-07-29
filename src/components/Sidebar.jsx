import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import SidebarItem from "./SidebarItem";
import "../styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { FaAngleLeft, FaPlus, FaRocket, FaSortUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FaSortDown } from "react-icons/fa6";

const Sidebar = ({ sidebarOpened, setSidebarOpened }) => {
  const { todoLists } = useContext(MainContext);
  const loc = useLocation();
  const [selected, setSelected] = useState("-1");
  const [shown, setShown] = useState(true);

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
        initial={window.innerWidth > 700 ? "opened" : "closed"}
        animate={sidebarOpened ? "opened" : "closed"}
        exit={{ display: "none" }}
        className="sidebar"
      >
        <Link to="/" className="heading-link">
          <h1 className="heading rocket">
            <FaRocket className="rocket" /> React Todos
          </h1>
        </Link>

        <FaAngleLeft
          className="close-btn btn"
          onClick={() => setSidebarOpened(false)}
        />

        <div className="sidebar-section">
          <div className="section-head">
            <h4>Todo</h4>
            {shown ? (
              <FaSortUp className="btn" onClick={() => setShown(false)} />
            ) : (
              <FaSortDown className="btn" onClick={() => setShown(true)} />
            )}
          </div>
          <motion.div
            variants={{
              shown: {
                scaleY: 1,
                transition: { ease: "easeInOut", duration: 0.3 },
              },
              hidden: {
                scaleY: 0,
                transition: { ease: "easeInOut", duration: 0.3 },
              },
            }}
            initial="shown"
            animate={shown ? "shown" : "hidden"}
            className="sidebar-items"
          >
            {todoLists.map((list) => {
              return (
                <SidebarItem
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  selected={list.id == selected}
                  icon={list.icon}
                  setSidebarOpened={setSidebarOpened}
                />
              );
            })}

            <Link
              to="/create-todo-list"
              className="create-btn color-black"
              onClick={() =>
                window.innerWidth <= 700 && setSidebarOpened(false)
              }
            >
              <FaPlus className="color-black" /> Create
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
