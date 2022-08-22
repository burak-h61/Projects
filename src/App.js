import { useState } from "react";
import TodoList from "./components/Todo/TodoList";
import NewTodo from "./components/newTodo/NewTodo";
import "./App.css"

function App() {
  const todoPriority = ["High", "Normal", "Low"];
  const DUMMY_TODOS = [
    {
      id: 1,
      title: "do homework",
      description: "Math, English",
      priority: todoPriority[0],
      date: new Date(2022, 1, 12),
    },
    {
      id: 2,
      title: "new Car",
      description: "Tesla",
      priority: todoPriority[1],
      date: new Date(2022, 5, 12),
    },
    {
      id: 3,
      title: "new Tv",
      description: "Samsung LED",
      priority: todoPriority[2],
      date: new Date(2022, 2, 12),
    },
  ];
  const [todos, setTodo] = useState(DUMMY_TODOS);
  const onAddTodoHandler = (todo) => {
    setTodo((prevTodo) => {
      return [todo, ...prevTodo];
    });
  };
  // id doesnt work --> need to research for now delete function work
  const onRemoveTodoHandler = (selectedTodo) => {
    console.log(selectedTodo.id);
    setTodo((prevTodo) =>
      prevTodo.filter((todo) => {
        return (
          todo.title !== selectedTodo.title ||
          todo.description !== selectedTodo.description ||
          todo.priority !== selectedTodo.priority ||
          todo.date !== selectedTodo.date
        );
      })
    );
  };

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <div className="todo__start">
        <h2>Todos</h2>
      </div>
      <TodoList items={todos} onRemoveTodoHandler={onRemoveTodoHandler} />
    </div>
  );
}

export default App;
