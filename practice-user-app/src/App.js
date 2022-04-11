import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

import { useState } from "react";

function App() {
  const usersList = [];
  const [users, setUsers] = useState(usersList);

  const addUserHandler = (userCreated) => {
    console.log("userCreated: " + userCreated);
    setUsers((usersPrev) => {
      return [...usersPrev,
        userCreated];
    }); 

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserForm items={users} onSaveUser={addUserHandler}/>
      <UsersList items={users}/>
    </div>
  );
}

export default App;
