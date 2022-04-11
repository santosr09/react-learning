import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};



// Reading inputs using useState() hook

/* const [enteredUsername, setEnteredUsername] = useState('');
const [enteredAge, setEnteredAge] = useState('');
const [error, setError] = useState();

const addUserHandler = (event) => {
  event.preventDefault();
  if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    setError({
      title: 'Invalid input',
      message: 'Please enter a valid name and age (non-empty values).',
    });
    return;
  }
  if (+enteredAge < 1) {
    setError({
      title: 'Invalid age',
      message: 'Please enter a valid age (> 0).',
    });
    return;
  }
  props.onAddUser(enteredUsername, enteredAge);
  setEnteredUsername('');
  setEnteredAge('');
};

const usernameChangeHandler = (event) => {
  setEnteredUsername(event.target.value);
};

const ageChangeHandler = (event) => {
  setEnteredAge(event.target.value);
};

const errorHandler = () => {
  setError(null);
};

return (
  <div>
    {error && (
      <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />
    )}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}          
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  </div>
);
}; */

export default AddUser;
