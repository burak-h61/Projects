import { useState } from "react";
import "./TodoForm.css";
const TodoForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [inputDate, setInputDate] = useState("");
  const selectOptions = ["High", "Normal", "Low"];

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

    props.onSaveTodoData(enteredTodo);
    setInputTitle("");
    setInputDescription("");
    setInputPriority("");
    setInputDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="todo">
        <div className="todo__control">
          <label>Todo</label>
          <input
            type="text"
            value={inputTitle}
            onChange={onTitleHandler}
            required
            pattern="\S+.*"
          />
        </div>
        <div className="todo__control">
          <label> Description</label>
          <input
            type="text"
            value={inputDescription}
            onChange={onDescriptionHandler}
            required
            pattern="\S+.*"
          />
        </div>
        <div className="todo__control">
          <label>Priority</label>
          <select
            required
            value={inputPriority}
            onChange={onPriorityHandler.bind(inputPriority)}
          >
            <option></option>
            {selectOptions.map((option) => (
              <option key={Math.random()}>{option}</option>
            ))}
          </select>
        </div>
        <div className="todo__control">
          <label>Date</label>
          <input
            className="todo__date"
            type="text"
            min="2019-01-01"
            max="2022-12-31"
            required
            value={inputDate}
            onChange={onDateHandler}
            onFocus={(e)=> (e.target.type="date")}
            onBlur={(e)=>(e.target.type="text")}
          />
        </div>
        <div className="btns">
          <button className="btn__todo" type="button" onClick={props.isVisible}>
            Cancel
          </button>
          <button
            className="btn__todo"
            type="submit"
            disabled={
              !inputTitle || !inputDescription || !inputPriority || !inputDate
            }
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
