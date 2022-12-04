import React, { useState, useEffect } from 'react';
import styles from "./ChatInput.module.css";
import Button from '@mui/material/Button';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

const ChatInput = (props) => {

    const {channelId, channelName, chatRef} = props;
    // console.log(channelId);

    // const inputRef = useRef(null);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        // console.log(channelId);
        e.preventDefault();
        // console.log("Hitting the sendMessage function")
        if (!channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            // message: inputRef.current.value,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Ricky Dhanota",
            userImage: null
        });

        // chatRef.current.scrollIntoView({
        //     behavior: "smooth",
        // });

        setInput("");
    }

    useEffect(() => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }, [sendMessage])

    return (
        <div className= {styles.chatInput_container}>
            <form>
                {/* <input ref={inputRef} placeholder={`Message #${channelId}`}/> */}
                <input value={input} placeholder={`Message #${channelName}`} onChange ={(e) => setInput(e.target.value)}/>
                <Button hidden type='submit' onClick={sendMessage} className = {styles.chatInput_button}>Send</Button>
            </form>
        </div>
    );
};

export default ChatInput;