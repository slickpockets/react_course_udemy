import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();



  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
    {
      setError({
        title: 'invalid input',
        message: 'please enter a valid name (not empty)'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'invalid age',
        message: 'enter a valid age (>0)'
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);

  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangedHandler} value={enteredUsername}/>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" onChange={ageChangedHandler} value={enteredAge}/>
        <Button type="submit">Add User </Button>
        </form>
      </Card>
    </div>
  )




};




export default AddUser;
