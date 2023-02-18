import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lnameValue,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: lnameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  const formIsValid = (nameIsValid && lnameIsValid && emailIsValid) ? true : false;

  const nameClasses = (nameHasError) ? 'form-control invalid' : 'form-control';
  const lnameClasses = (lnameHasError) ? 'form-control invalid' : 'form-control';
  const emailClasses = (emailHasError) ? 'form-control invalid' : 'form-control';


  const submitFormHandler = (event) => {
    event.preventDefault();

    if(emailHasError || nameHasError || lnameHasError) {
      return;
    }

    console.log(nameValue, lnameValue, emailValue);

    nameReset();
    lnameReset();
    emailReset();

  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue} />
            {nameHasError && <p>Enter valid name</p>}
        </div>
        <div className={lnameClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
            value={lnameValue} />
            {lnameHasError && <p>Enter valid last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue} />
          {emailHasError && <p>Enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
