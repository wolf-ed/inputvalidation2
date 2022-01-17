import { useState } from 'react';
import React from 'react';
import styles from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUserName, setenteredUserName] = useState('');
    const [enteredUserAge, setenteredUserAge] = useState('');
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0 ||
        enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }
        if(+enteredUserAge < 1){//adding the + we ensure that if it's a string we convert it into a number 
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age.'
            })
            return;
        }
        props.onChangeSetNewUser(enteredUserName, enteredUserAge)
        setenteredUserName('');
        setenteredUserAge('');
    }

    const nameHandler = (event) => {
        setenteredUserName(event.target.value)
    }

    const ageHandler = (event) => {
        setenteredUserAge(event.target.value)
    }

    const hideErrorModal = () =>{
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onHide={hideErrorModal}/>}
        <Card className={styles.input}>
        <form onSubmit={addUserHandler} >
            <label htmlFor="username">UserName</label>
            <input 
            id="username" 
            type="text" 
            onChange={nameHandler}
            value={enteredUserName}/>

            <label htmlFor="userage">UserAge</label>
            <input 
            id="userage" 
            type="number" 
            onChange={ageHandler}
            value={enteredUserAge}/>

            <Button type="submit">Add user</Button>
        </form>
        </Card>
        </div>
    );
}

export default AddUser;