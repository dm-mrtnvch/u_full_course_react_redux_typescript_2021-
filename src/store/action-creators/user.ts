import axios from "axios";
import {UserAction, UserActionType} from "../../types/user";
import {Dispatch} from "redux";


export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionType.FETCH_USERS})
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setTimeout(() => {
            dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
        }, 1000)
    } catch (e) {
        dispatch({
            type: UserActionType.FETCH_USERS_ERROR,
            payload: "error message"
        })
    }
}