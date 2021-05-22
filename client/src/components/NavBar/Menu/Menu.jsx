import React from 'react';
import classes from "./Menu.module.scss";

const Menu = (props) => {
    return (
        <div className={`${props.active ? classes.menu + " " + classes.active: classes.menu}`}>
            <div className={classes.blur}>
                <div className={classes.menu__content}>
                    <ul>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;