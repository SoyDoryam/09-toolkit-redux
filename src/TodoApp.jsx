import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

const TodoApp = () => {
    // const {data: todos = [], isLoading } = useGetTodosQuery();
    const  [todoId, setTodoId] = useState(1);
    const {data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId((prevId) => prevId + 1)
    }

    const prevTodo = () => {
        if(todoId === 1) return;
        setTodoId( (prevId) => prevId - 1 )
    }
    
  return (
    
    <>
        <h1>Todo - RTK Query</h1>
        <hr />
        <h4>IsLoading: {isLoading ? 'true': 'false'}</h4>
        <h4>Page: {todoId}</h4>
        <pre>{JSON.stringify(todo)}</pre>
 
        <button onClick={ prevTodo }>
            Prev Todo
        </button>
        <button onClick={ nextTodo }>
            Next Todo
        </button>

        {/* <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <strong>{todo.completed? 'DONE':'Pending'}</strong> {todo.title}
                </li>
            ))}            
        </ul> */}
    </>
  )
}

export default TodoApp