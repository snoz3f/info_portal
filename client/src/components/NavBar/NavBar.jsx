import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import classes from "./NavBar.module.scss"
import Menu from "./Menu/Menu";
import {NavLink} from 'react-router-dom'


const NavBar = (props) => {
    const isAuth = useSelector(state => state.user.isAuth)
    const [active, setActive] = useState(false)
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.header_container}>
                    <div className={classes.menu__container}>
                        <div className={classes.menu__button} onClick={() => setActive(!active)}/>
                        <span className={classes.menu__header}>News</span>
                    </div>
                    <div className={classes.auth__btns}>
                        {!isAuth &&
                        <NavLink to='/login'>
                            <button type="button" className={classes.login__btn}>Login</button>
                        </NavLink>}
                        {!isAuth && <NavLink to='/registration'>
                            <button type="button" className={classes.signup__btn}>Sign Up</button>
                            </NavLink>
                        }
                        {isAuth && <button type="button" className={classes.signup__btn}>Logout</button>}
                    </div>
                </div>
            </header>
            <Menu active={active} setActive={setActive}/>
        </div>
    );
};

export default NavBar;