import { useSelector, useDispatch } from "react-redux"
import { User } from "../component/user/user"
import { REMOVE_USER } from "../actions/actions"

export function UserList() {

    const currentUsers = useSelector(state => state.userReductor.user)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch({type: REMOVE_USER, payload: {id: id}})
        console.log(currentUsers)
    }

    const handleEdit = (id) => {
        
    }

    return (
        <>
            <h1>USER LIST</h1>
            {currentUsers.map(user => {
                return (
                    <User 
                        id={user.id} 
                        firstname={user.firstname} 
                        lastname={user.lastname} 
                        email={user.email} 
                        handleRemove={() => handleRemove(user.id)} 
                    />
                )
            })}
        </>
    )
}