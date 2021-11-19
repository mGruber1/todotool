import React from 'react';
import Styles from './Form.module.scss';

const Form = () => {
    const submitHandler = (event) => {
        console.log("SUBMITTED")
    }
    return (
        <form className={Styles.form} onSubmit={submitHandler}>
            <label>
                Filter:
            </label>
            <select>
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="type">Type</option>
                <option value="priority">Priority</option>
                <option value="expiry">Expiration</option>
                <option value="status">Status</option>
            </select>
        </form>
    );
};

export default Form;