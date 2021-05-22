import React, {useState} from 'react';
import classes from './Login.module.scss'
import {useDispatch} from 'react-redux'
import {login} from "../../actions/user";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()


    return (
        <div className={classes.auth__container}>
            <div className={classes.auth__content}>
                <div>
                    <h3>Login</h3>
                </div>
                <div className={classes.input__container}>
                    <input className={classes.input} value={email} onChange={(event => setEmail(event.target.value))} type="text" placeholder="Email"/>
                    <input className={classes.input} value={password} onChange={(event => setPassword(event.target.value))} type="password" placeholder="Password"/>
                    <button className={classes.login__btn} onClick={() => dispatch(login(email, password))} >Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;