import React, {useState} from 'react';
import classes from './Registration.module.scss'
import {registration} from "../../actions/user";

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={classes.auth__container}>
            <div className={classes.auth__content}>
                <div>
                    <h3>Регистрация</h3>
                </div>
                <div className={classes.input__container}>
                    <input  className={classes.input} value={name} onChange={(event => setName(event.target.value))}  type="text" placeholder="Name"/>
                    <input className={classes.input} value={email} onChange={(event => setEmail(event.target.value))} type="text" placeholder="Email"/>
                    <input className={classes.input} value={password} onChange={(event => setPassword(event.target.value))} type="password" placeholder="Password"/>
                    <button className={classes.registration__btn} onClick={() => registration(name, email, password)}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;