import { useState } from "react";
import React from "react";

const UserForm = (props) => {

  //const usersList = [];

  const [users, setUsers] = useState(props.items);

  const [userInput, setUserInput] = useState({
    id: "",
    username: "",
    age: ""
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const userCreated = {
      username: userInput.username,
      age: userInput.age,
      id: Math.floor(Math.random() * 100)
    }    

/*     setUsers((usersPrev) => {
      return [...usersPrev,
        userCreated];
    }); */

    setUserInput( () => {
      return {id: "",
      username: "",
      age: ""}
    });


    //console.log("users: " + users);
    props.onSaveUser(userCreated);

  }

  const usernameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        username: event.target.value
      };
    });
  }

  const ageChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        age: event.target.value
      }
    });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" value={userInput.username} onChange={usernameChangeHandler} />
          <div>
            <label>Age (Years)</label>
            <input type="number" value={userInput.age} onChange={ageChangeHandler} />
          </div>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );

}

export default UserForm;