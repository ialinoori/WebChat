import React from 'react';

//Styles
import styles from "./Navbar.module.css"

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Aligram
            </div>
            <div onClick={logoutHandler} className={styles.logout}>
                Logout
            </div>
            
        </div>
    );
};

export default Navbar;