import { useState } from "react";
import styled from './UserInput.module.css'
const UserInput = (props) => {
    const [EnterName,setName] = useState('');
    const [EnterAge,setAge] = useState('');
    const [message,setMessage] = useState('');
    const [open,setOpen] = useState(false);

    const handlerEnterName = (event) => {
        setName(event.target.value);
    }
    const handlerEnterAge = (event) => {
        setAge(Number(event.target.value));
    }
    const handlerDialog = (event) => {
        event.preventDefault()
        setOpen(false);
        setAge('');
    }
    const handlerSubmit = (event) => {
        event.preventDefault();
        if(EnterName === '' && EnterAge === ''){
            setOpen(true);
            setMessage("Please Enter Username & Age");
            return;
        } else if(EnterAge <= 1){
            setOpen(true);
            setMessage("Enter Age > 0");
            return;
        }
        const userData = {
            id: Math.random().toString(),
            name: EnterName,
            age: EnterAge
        }
        setName('');
        setAge('');
        props.onSubmit(userData);
    }
    return(
        <div className="user_input">
            <form onSubmit={handlerSubmit} action="/">
                <label htmlFor="username">User Name</label>
                <input type="text" name="username" id="username" value={EnterName} onChange={handlerEnterName}/>
                <label htmlFor="userage">Age</label>
                <input type="number" name="userage" id="userage" value={EnterAge} onChange={handlerEnterAge}/>
                <button type="submit">Submit</button>
            </form>
            <div className={styled['user_err']}>
                <dialog open={open}>
                    <span>{message}</span>
                    <button onClick={handlerDialog}>Cancel</button>
                </dialog>
            </div>
        </div>
    );
}
export default UserInput;