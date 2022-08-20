import "./TodoDate.css";

const TodoDate = (props) => {
    const month= props.date.toLocaleString("en-US",{month:"long"});
    const day = props.date.toLocaleString("en-Us",{day:"2-digit"});
    const year= props.date.getFullYear();
  return (
    <div className="todo__date_form">
      <div className="todo__day">{day}</div>
      <div className="todo__month">{month}</div>
      <div className="todo__year">{year}</div>
    </div>
  );
};

export default TodoDate;
