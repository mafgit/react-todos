import { createContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import CreateTodoList from "./pages/CreateTodoList";
import CreateTodo from "./pages/CreateTodo";
import HomePage from "./pages/HomePage";
import InvalidPath from "./pages/InvalidPath";
import {
  FaAngleRight,
  FaBars,
  FaBook,
  FaBuilding,
  FaCar,
  FaClock,
  FaFile,
  FaFlag,
  FaHospital,
  FaKey,
  FaPen,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";
import defaultTodoLists from "./defaultTodoLists";

export const MainContext = createContext(0);

function App() {
  // must do like this otherwise localstorage keeps on changing back to default even after creating new items
  const [todoLists, setTodoLists] = useState(() => {
    return JSON.parse(localStorage.getItem("todo-lists")) || defaultTodoLists;
  });

  const saveTodoLists = (lists) => {
    return localStorage.setItem("todo-lists", JSON.stringify(lists));
  };

  const getRandomId = () => {
    const min = 2;
    const max = 100000;
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [sidebarOpened, setSidebarOpened] = useState(
    () => window.innerWidth > 700
  );

  const icons = [
    FaRocket,
    FaPen,
    FaBuilding,
    FaBook,
    FaClock,
    FaKey,
    FaFile,
    FaFlag,
    FaCar,
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <MainContext.Provider
          value={{
            todoLists,
            setTodoLists,
            saveTodoLists,
            getRandomId,
            icons,
          }}
        >
          <Sidebar
            sidebarOpened={sidebarOpened}
            setSidebarOpened={setSidebarOpened}
          />

          <div
            className="main-container"
            // variants={{
            //   full: {
            //     x: "0",
            //     width: "100%",
            //     transition: { ease: "easeInOut", duration: 0.3 },
            //   },
            //   notFull: {
            //     x: "0",
            //     width: "100%",
            //     transition: { ease: "easeInOut", duration: 0.3 },
            //   },
            // }}
            // initial="notFull"
            // animate={sidebarOpened ? "notFull" : "full"}
            // exit={{ display: "none" }}
          >
            {!sidebarOpened && (
              <FaAngleRight
                className="open-btn btn"
                onClick={() => setSidebarOpened(true)}
              />
            )}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo-list/:id" element={<TodoList />} />
              <Route
                path="/create-todo-list"
                element={<CreateTodoList edit={false} />}
              />
              <Route
                path="/todo-list/:id/create-todo"
                element={<CreateTodo edit={false} />}
              />
              <Route
                path="/todo-list/:id/edit-todo-list"
                element={<CreateTodoList edit={true} />}
              />
              <Route
                path="/todo-list/:id/edit-todo/:tid"
                element={<CreateTodo edit={true} />}
              />
              <Route
                path="/todo-list/:id/edit-todo/:tid"
                element={<CreateTodo edit={true} />}
              />
              <Route path="*" element={<InvalidPath />} />
            </Routes>
          </div>
        </MainContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
