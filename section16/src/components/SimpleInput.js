import { useState, useEffect } from 'react';
import useInput from '../hooks/use-input';



const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameValid,
    valueChangedHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameResetHandler
  } = useInput(value => value.trim() !== '');
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailValid,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailHandler
  } = useInput(value => value.includes('@'));


  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredNameValid && emailValid) {
      return;
    }
    nameResetHandler();
    resetEmailHandler();

  };



  const nameInputClasses = nameInputHasError
   ? 'form-control invalid'
   : 'form-control ';

   const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control ';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         type='text'
         id='name'
         onChange={enteredName}
         value={nameInputChangeHandler}
         onBlur={nameBlurHandler}
         />
      </div>
      {nameInputHasError && <p className="error-text"> name cant be empty</p>}

      <div className={emailInputClasses}>
        <label className={emailInputClasses}>Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
         />
         {emailInputHasError && (
           <p className="error-text"> enter Valid email </p>
         )}
      </div>
      <div className="form-actions">
        <button className="disabled" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
