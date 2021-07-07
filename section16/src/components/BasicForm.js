import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

const {
  value: firstNameValue,
  isValid: firstNameValid,
  valueChangedHandler: firstNameChangeHandler,
  inputBlurHandler: firstNameBlurHandler,
  reset: firstNameReset,
  hasError: firstNameHasError,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameValid,
    valueChangedHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
    hasError: lastNameHasError
    } = useInput(isNotEmpty);

    const {
      value: emailValue,
      isValid: emailValid,
      valueChangedHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: emailReset,
      hasError: emailHasError
      } = useInput(isEmail);

      let formIsValid = false;

      if (firstNameValid && lastNameValid && emailValid) {
        formIsValid = true;
      }


      const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
      const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
      const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

      const onSubmitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
          return;
        }
        console.log('submitted');
        console.log(firstNameValue, lastNameValue, emailValue)
        emailReset();
        firstNameReset();
        lastNameReset();
      }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
           type='text'
           id='name'
           value={firstNameValue}
           onBlur={firstNameBlurHandler}
           onChange={firstNameChangeHandler}
            />
            {firstNameHasError && <p className="error-text"> Please enter first name </p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
          type='text'
          id='name'
          value={lastNameValue}
          onBlur={lastNameBlurHandler}
          onChange={lastNameChangeHandler}
           />
           {lastNameHasError && <p className="error-text"> Please enter last name </p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
        type='text'
        id='name'
        value={emailValue}
        onBlur={emailBlurHandler}
        onChange={emailChangeHandler}
         />
         {emailHasError && <p className="error-text"> Please enter email </p>}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
