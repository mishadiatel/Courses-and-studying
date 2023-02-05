import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Halpers/Wrapper";



const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age ( > 0).'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        // setEnteredUsername('');
        // setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // const usernameChangeHandler = event => {
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = event => {
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler = () => {
        setError(null);
    }

    return (

        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />}
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input
                        id="username"
                        type={'text'}
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        id="age"
                        type={'number'}
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </Wrapper>
    )
}

export default AddUser;