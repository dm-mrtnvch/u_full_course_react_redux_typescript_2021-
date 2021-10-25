import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({type: TodoActionTypes.FETCH_TODOS})
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                _page: page,
                _limit: limit
            }
        })
        setTimeout(() => {
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        }, 2000)

    } catch (e) {
        dispatch({
            type: TodoActionTypes.FETCH_TODOS_ERROR,
            payload: "error message"
        })
    }
}

export function setTodoPage(page: number): TodoAction {
    return  {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}