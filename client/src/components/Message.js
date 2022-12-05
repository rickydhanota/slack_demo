import React from 'react';
import styles from "./Message.module.css";

const Message = (props) => {

    const {message, timestamp, user, userImage} = props;
    // console.log(userImage);

    return (
        <div className= {styles.message_container}>
            <div className= {styles.message_info}>
                <img src={userImage} alt = '' />
                <h4>{user} {' '} <span>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Message;