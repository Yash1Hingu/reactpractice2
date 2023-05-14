import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
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
  return (
    <div className="App">
      <UserInput />
    </div>
  );
}

export default App;
