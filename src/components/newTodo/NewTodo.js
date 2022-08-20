import TodoForm from "./TodoForm";
const NewTodo=(props)=>{

    const onSaveTodoData=(enteredTodo)=>{
        const newTodo = {
            ...enteredTodo,
            id:Math.random().toString()
        };
        props.onAddTodo(newTodo);
    }

    return(
        <TodoForm onSaveTodoData={onSaveTodoData}/>
    );
}


export default NewTodo;