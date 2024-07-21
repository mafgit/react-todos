import { createContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import CreateTodoList from "./pages/CreateTodoList";

export const MainContext = createContext(0);

function App() {
  // default todo lists
  const [todoLists, setTodoLists] = useState([
    {
      id: 0,
      icon: "",
      title: "List 1",
      todos: [
        {
          id: 0,
          completed: false,
          title: "Go to shopping",
          date: "12 Sep, 2024",
        },
        {
          id: 1,
          completed: false,
          title: "Go to market",
          date: "13 Sep, 2024",
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
          date: "12 Sep, 2024",
        },
        {
          id: 1,
          completed: false,
          title: "Go to market 2",
          date: "13 Sep, 2024",
        },
      ],
    },
  ]);

  useEffect(() => {
    const ts = localStorage.getItem("todo-lists");
    if (ts == null) {
      localStorage.setItem("todo-lists", JSON.stringify(todoLists));
    } else {
      setTodoLists(JSON.parse(ts));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <MainContext.Provider
          value={{
            todoLists,
            setTodoLists,
            // selectedTodoListId,
            // setSelectedTodoListId,
          }}
        >
          <Sidebar />
          <div className="main">
            <Routes>
              <Route path="/todo-list/:id" element={<TodoList />} />
              <Route path="/create-todo-list" element={<CreateTodoList />} />
            </Routes>
          </div>
        </MainContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
