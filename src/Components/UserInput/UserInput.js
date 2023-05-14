import { useState } from "react";

const UserInput = (props) => {
    const [EnterName,setName] = useState('');
    const [EnterAge,setAge] = useState('');

    const handlerEnterName = (event) => {
        setName(event.target.value);
    }
    const handlerEnterAge = (event) => {
        setAge(event.target.value);
    }
    const handlerSubmit = (event) => {
        event.preventDefault();

        const userData = {
            id: Math.random().toString(),
            name: EnterName,
            age: Number(EnterAge)
        }
        props.onSubmit(userData);
    }
    return(
        <div className="user_input">
            <form onSubmit={handlerSubmit}>
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" value={EnterName} onChange={handlerEnterName}/>
                <label htmlFor="userage">Age</label>
                <input type="number" name="userage" id="userage" value={EnterAge} onChange={handlerEnterAge}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default UserInput;