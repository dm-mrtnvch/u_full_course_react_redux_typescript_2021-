import axios from "axios";
import {Dispatch} from "redux";
import {TodoAction, TodoActionTypes} from "../../types/todo";


export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({type: TodoActionTypes.FETCH_TODO})
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                _page: page,
                _limit: limit
            }
        })
        setTimeout(() => {
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data})
        }, 1000)
    } catch (e) {
        dispatch({
            type: TodoActionTypes.FETCH_TODO_ERROR,
            payload: "todos error"
        })
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}