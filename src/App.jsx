import { createContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";

export const MainContext = createContext(0);

function App() {
  const [todoLists, setTodoLists] = useState([
    {
      id: 0,
      icon: "",
      name: "List 1",
      todos: [
        {
          id: 0,
          completed: false,
          name: "Go to shopping",
          date: "12 Sep, 2024",
        },
        {
          id: 1,
          completed: false,
          name: "Go to market",
          date: "13 Sep, 2024",
        },
      ],
    },
    {
      id: 1,
      icon: "",
      name: "List 2",
      todos: [
        {
          id: 0,
          completed: false,
          name: "Go to shopping 2",
          date: "12 Sep, 2024",
        },
        {
          id: 1,
          completed: false,
          name: "Go to market 2",
          date: "13 Sep, 2024",
        },
      ],
    },
  ]);
  // const [selectedTodoListId, setSelectedTodoListId] = useState(-1);

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
          <Routes>
            <Route path="/todolist/:id" element={<TodoList />} />
          </Routes>
        </MainContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
