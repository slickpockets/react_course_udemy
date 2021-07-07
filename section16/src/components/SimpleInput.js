import { useRef, useState, useEffect } from 'react';


const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameValid, setEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameValid) {
      console.log('name valid')
    }
  }, [enteredNameValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== ''){
      setEnteredNameValid(true);
    };
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === ''){
      setEnteredNameValid(false);
    };
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === ''){
      setEnteredNameValid(false);
      return;
    }
    setEnteredNameValid(true);
    console.log(nameInputRef.current.value);
    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched

  const nameInputClasses = enteredNameValid
   ? 'form-control '
   : 'form-control invalid';
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         ref={nameInputRef}
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
