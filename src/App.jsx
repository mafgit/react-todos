import { createContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import CreateTodoList from "./pages/CreateTodoList";
import CreateTodo from "./pages/CreateTodo";
import HomePage from "./pages/HomePage";
import InvalidPath from "./pages/InvalidPath";
import { FaBars } from "react-icons/fa";

export const MainContext = createContext(0);

// default todo lists
const defaultTodoLists = [
  {
    id: 0,
    icon: "",
    title: "List 1",
    todos: [
      {
        id: 0,
        completed: false,
        title: "Go to shopping",
        date: "2024-09-12",
        listId: 0,
      },
      {
        id: 1,
        completed: false,
        title: "Go to market",
        date: "2024-09-13",
        listId: 0,
      },
    ],
  },
  {
    id: 1,
    icon: "",
    title: "List 2",
    todos: [
      {
        id: 0,
        completed: false,
        title: "Go to shopping 2",
        date: "2024-09-12",
        listId: 1,
      },
      {
        id: 1,
        completed: false,
        title: "Go to market 2",
        date: "2024-09-13",
        listId: 1,
      },
    ],
  },
];

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

  const [sidebarOpened, setSidebarOpened] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <MainContext.Provider
          value={{
            todoLists,
            setTodoLists,
            saveTodoLists,
            getRandomId,
          }}
        >
          <Sidebar
            sidebarOpened={sidebarOpened}
            setSidebarOpened={setSidebarOpened}
          />

          <div className="main-container">
            {!sidebarOpened && (
              <FaBars
                className="bars btn"
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
