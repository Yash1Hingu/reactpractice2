import styled from './UserList.module.css'
const UserList = (props) => {
    const handlerDeleteItem = (event) => {
        props.onDelete(event.target.id);
    }
    return (
        <ul className={styled.users_list}>
            {props.usersList.map(user => (
                <li className={styled.list_item} onClick={handlerDeleteItem} id={user.id}>{`${user.name} (${user.age})`} </li>
            ))}
        </ul>
    )
}
export default UserList;