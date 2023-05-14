import logo from './logo.svg';
import styeled from './App.module.css';
import UserInput from './Components/UserInput/UserInput';
import { useState } from 'react';
import UserList from './Components/UserList/UserList';
const DUMMY_USER = [
  {
    id: 'u1',
    name: 'Yash',
    age: 19
  },
  {
    id: 'u2',
    name: 'Dhaval',
    age: 12
  }
]
function App() {
  const [users,setUsers] = useState(DUMMY_USER);
  const handlerSubmit = (data) => {
    setUsers(prevUsers => ([...prevUsers,data]))
  }
  const handlerDelete = (id) => {
    setUsers(users.filter(user => user.id != id));
  }
  return (
    <div className={styeled.App}>
      <UserInput onSubmit={handlerSubmit}/>
      <UserList usersList={users} onDelete={handlerDelete}/>
    </div>
  );
}

export default App;
