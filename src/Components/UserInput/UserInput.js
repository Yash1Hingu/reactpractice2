import { useRef, useState } from "react";
import { createPortal } from 'react-dom';
import styled from './UserInput.module.css'
import ErrorDialog from "../ErrorDialog/ErrorDialog";
const UserInput = (props) => {
    const enterName = useRef();
    const enterAge = useRef();
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    const handlerDialog = (event) => {
        event.preventDefault()
        setOpen(false);
        enterAge.current.value = '';
    }
    const handlerSubmit = (event) => {
        event.preventDefault();
        const enterUserName = enterName.current.value;
        const enterUserAge = enterAge.current.value;
        if (enterUserName === '' && enterUserAge === '') {
            setOpen(true);
            setMessage("Please Enter Username & Age.");
            return;
        } else if (enterUserAge <= 1) {
            setOpen(true);
            setMessage("Enter Age > 0.");
            return;
        }
        const userData = {
            id: Math.random().toString(),
            name: enterUserName,
            age: enterUserAge
        }
        enterName.current.value = ''
        enterAge.current.value = ''
        props.onSubmit(userData);
    }
    return (
        <div className={styled.user_input}>
            <form onSubmit={handlerSubmit} action="/">
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    ref={enterName}
                />
                <label htmlFor="userage">Age</label>
                <input
                    type="number"
                    name="userage"
                    id="userage"
                    ref={enterAge}
                />
                <button type="submit">Submit</button>
            </form>
            {createPortal(
                <ErrorDialog open={open} onDialogClick={handlerDialog} message={message} />,
                document.body
            )}
        </div>
    );
}
export default UserInput;