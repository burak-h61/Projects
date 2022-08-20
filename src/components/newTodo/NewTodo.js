import TodoForm from "./TodoForm";
import { useState } from "react";
import "./NewTodo.css";

const NewTodo = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const onSaveTodoData = (enteredTodo) => {
    const newTodo = {
      ...enteredTodo,
      id: Math.random().toString(),
    };
    
    props.onAddTodo(newTodo);
  };

  const startVisibleHandler = () => {
    setIsVisible(true);
  };

  const stopVisibleHandler = () => {
    setIsVisible(false);
  };

  return (
    <div className="new__todo">
      {isVisible === false ? (
        <button onClick={startVisibleHandler}>Add new Todo</button>
      ) : (
        <div>
          <TodoForm
            onSaveTodoData={onSaveTodoData}
            isVisible={stopVisibleHandler}
          />
        </div>
      )}
    </div>
  );
};

export default NewTodo;
