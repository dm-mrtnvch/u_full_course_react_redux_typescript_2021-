import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {fetchTodos} from "../store/actions-creators/todo";

const TodoList: React.FC = () => {
    const {page, todos, error, limit, loading} = useTypedSelector(state => state.todo)
    const {} = useActions()


    useEffect(() => {
        fetchTodos(page, limit)
    }, [])

    if(loading){
        return <h1>loading....</h1>
    }

    if(error){
        return <h1>errrror msg</h1>
    }


    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.id} - {todo.name}</div>
            ))}

        </div>
    );
};

export default TodoList
