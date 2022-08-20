import TodoDate from "../TodoDate";
import "./Todo.css";
const Todo = (props) => {
  return (
    <div className="todo__content">
      <TodoDate  date={props.date}/>
      <div className="todo__title">{props.title}</div>
      <div className="todo__description">{props.description}</div>
      <div className="todo__priority" >{props.priority}</div>
    </div>
  );
};

export default Todo;
