import { Button } from '@mui/material';
import React from 'react';
import { auth, provider } from './firebase';
import styles from "./Login.module.css";

const Login = (props) => {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch(err => console.log(err))
    }

    return (
        <div className= {styles.login_container}>
            <div className= {styles.login_innerContainer}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png' alt='' />
                <h1>Sign Into Slack Demo</h1>
                <p>ricky-slack-demo.slack.com</p>
                <Button onClick={signIn} className = {styles.login_button} >Sign In With Google</Button>
            </div>
        </div>
    );
};

export default Login;