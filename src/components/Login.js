import React from 'react';
import firebase from "firebase/app";
import {auth} from "../firebase"

//Icons
import google from "../assets/google.svg"

//Styles
import styles from "./Login.module.css"

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>Welcome to Aligram!</h2>
                <div onClick={() =>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())} className={styles.button}>
                    <img src={google} alt="google"/>sign in with Google
                </div>
            </div>
            
        </div>
    );
};

export default Login;