import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');


  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim() === 0){
      return;
    }
    if (+enteredAge < 1){
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return(
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username </label>
    <input type="text" id="username"
       value={enteredUsername
       } onChange={usernameChangeHandler}/>
    <label htmlFor="age">Age </label>
    <input type="number" id="age" value={enteredAge}
        onChange={ageChangeHandler}/>
    <Button type="submit">Add User </Button>
    </form>
    </Card>
  );
};

export default AddUser;
