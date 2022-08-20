import "./TodoList.css";
import Todo from "./Todo";
const TodoList = (props) => {
  let noTodo = <h2>No Todo was found.</h2>;
  return (
    <div className="todo_list">
      {props.items.length === 0
        ? noTodo
        : props.items.map((todo) => {
            return (
              <Todo
                key={todo.id}
                title={todo.title}
                description={todo.description}
                date={todo.date}
                priority={todo.priority}
              />
            );
          })}
    </div>
  );
};

export default TodoList;
