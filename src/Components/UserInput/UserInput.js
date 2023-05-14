const UserInput = (props) => {
    return(
        <div className="user_input">
            <form action="">
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="userage">Age</label>
                <input type="number" name="userage" id="userage" />
            </form>
        </div>
    );
}
export default UserInput;