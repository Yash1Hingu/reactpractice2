import styled from './UserList.module.css'
const UserList = (props) => {
    return (
        <ul className={styled.users_list}>
            {props.usersList.map(user => (
                <li className={styled.list_item}>{`${user.name} (${user.age})`}</li>
            ))}
        </ul>
    )
}
export default UserList;