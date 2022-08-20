import { useState } from "react";
import "./TodoForm.css";
const TodoForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [inputDate, setInputDate] = useState("");

  const onTitleHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const onDescriptionHandler = (event) => {
    setInputDescription(event.target.value);
  };

  const onPriorityHandler = (event) => {
    setInputPriority(event.target.value);
  };

  const onDateHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTodo = {
      title: inputTitle,
      description: inputDescription,
      priority: inputPriority,
      date: new Date(inputDate),
    };
    
    const validateEnteredTodoTitle = () => {
      return (
        enteredTodo.title !== null ||
        enteredTodo.title !== undefined ||
        enteredTodo.title !== ""
      );
    };
    const validateEnteredTodoDescription = () => {
      return (
        enteredTodo.description !== null ||
        enteredTodo.description !== undefined ||
        enteredTodo.description !== ""
      );
    };
    const validateEnteredTodoPriority = () => {
      return (
        enteredTodo.priority !== null ||
        enteredTodo.priority !== undefined ||
        enteredTodo.priority !== ""
      );
    };
    const validateEnteredTodoDate = () => {
      let validDate = Date.parse(enteredTodo.date);
      return isNaN(validDate);
    };

    const onValidateEnteredTodo = () => {
      return (
        validateEnteredTodoTitle() &&
        validateEnteredTodoDescription() &&
        validateEnteredTodoPriority() &&
        validateEnteredTodoDate()
      );
    };
    if (onValidateEnteredTodo()) {
      alert("Please check your Input.");
    } else {
      props.onSaveTodoData(enteredTodo);
      setInputTitle("");
      setInputDescription("");
      setInputPriority("");
      setInputDate("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="todo">
        <div className="todo__control">
          <label>Todo</label>
          <input type="text" value={inputTitle} onChange={onTitleHandler} />
        </div>
        <div className="todo__control">
          <label> Description</label>
          <input
            type="text"
            value={inputDescription}
            onChange={onDescriptionHandler}
          />
        </div>
        <div className="todo__control">
          <label>Priority</label>
          <select onChange={onPriorityHandler.bind(inputPriority)}>
            <option></option>
            <option onChange={onPriorityHandler}>High</option>
            <option onChange={onPriorityHandler}>Normal</option>
            <option onChange={onPriorityHandler}>Low</option>
          </select>
        </div>
        <div className="todo__control">
          <label>Date</label>
          <input
            className="todo__date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={onDateHandler}
          />
        </div>
        <div className="btns">
          <button className="btn__todo" type="button" onClick={props.isVisible}>
            Cancel
          </button>
          <button className="btn__todo" type="submit">
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
