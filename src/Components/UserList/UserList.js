const UserList = (props) => {
    return (
        <ul>
            {props.usersList.map(user => (
                <li>{`${user.name} (${user.age})`}</li>
            ))}
        </ul>
    )
}
export default UserList;