import { useState, useEffect } from 'react';


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  };


  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const nameInputClasses = enteredNameValid
   ? 'form-control '
   : 'form-control invalid';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         type='text'
         id='name'
         onChange={nameInputChangeHandler}
         value={enteredName}
         onBlur={nameInputBlurHandler}
         />
      </div>
      {nameInputIsInvalid && <p className="error-text"> name cant be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
