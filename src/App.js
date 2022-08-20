import { useState } from "react";
import TodoList from "./components/Todo/TodoList";
import NewTodo from "./components/newTodo/NewTodo";

function App() {
  const todoPriority = ["High", "Normal", "Low"];
  const DUMMY_TODOS=[
    {
      id:1,
      title:"do homework",
      description:"Math, English",
      priority:todoPriority[0],
      date: new Date(2022,1,12)
    },
    {
      id:2,
      title:"new Car",
      description:"Tesla",
      priority:todoPriority[1],
      date: new Date(2022,5,12)
    },
    {
      id:3,
      title:"new Tv",
      description:"Samsung LED",
      priority:todoPriority[2],
      date: new Date(2022,2,12)
    },
  ];
  const[todos,setTodo] = useState(DUMMY_TODOS);
  const addTodoHandler=(todo)=>{
    setTodo(prevTodo=>{
      return [todo,...prevTodo];
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
