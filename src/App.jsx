import { createContext, useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import CreateTodoList from "./pages/CreateTodoList";
import CreateTodo from "./pages/CreateTodo";

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
        date: "12 Sep, 2024",
        listId: 0,
      },
      {
        id: 1,
        completed: false,
        title: "Go to market",
        date: "13 Sep, 2024",
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
        date: "12 Sep, 2024",
        listId: 1,
      },
      {
        id: 1,
        completed: false,
        title: "Go to market 2",
        date: "13 Sep, 2024",
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
              path="/edit-todo-list"
              element={<CreateTodoList edit={true} />}
            />
            <Route
              path="/todo-list/:id/edit-todo/:tid"
              element={<CreateTodo edit={true} />}
            />
          </Routes>
        </MainContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
