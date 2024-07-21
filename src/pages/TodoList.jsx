import { useContext, useEffect, useState } from "react";
import { MainContext } from "../App";
import { useParams } from "react-router-dom";
import Todo from "../components/Todo";
import "../styles/TodoList.css";

const TodoList = () => {
  const { todoLists } = useContext(MainContext);
  const [todoList, setTodoList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    todoLists.length &&
      todoLists.forEach((list) => {
        if (list.id == id) {
          setTodoList(list);
        }
      });
  }, [id]);

  return (
    <div className="todo-list main">
      <h1>{todoList.title}</h1>
      {todoList.todos?.map((todo) => {
        return (
          <Todo
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
            id={todo.id}
            date={todo.date}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
