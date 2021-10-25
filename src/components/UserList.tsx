import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/actions-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading){
        return <h1>loading....</h1>
    }

    if(error){
        return <h1>errrror msg</h1>
    }

    return (
        <div>
            {users.map(user => (
             <div>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;