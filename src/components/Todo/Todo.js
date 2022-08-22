import TodoDate from "../TodoDate";
import "./Todo.css";
const Todo = (props) => {
  const onDeleteHandler = (event) => {
    event.preventDefault();
    props.onRemoveData(props);
  };
  return (
    <div className="todo__content">
      <TodoDate date={props.date} />
      <div>{props.id}</div>
      <div className="todo__title">{props.title}</div>
      <div className="todo__description">{props.description}</div>
      <div className="todo__priority">{props.priority}</div>
      <div className="todo__delete">
        <button type="submit" onClick={onDeleteHandler}>
          done
        </button>
      </div>
    </div>
  );
};

export default Todo;
