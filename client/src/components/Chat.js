import React, { useEffect, useRef } from 'react';
import styles from "./Chat.module.css";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from './ChatInput';
import { selectRoomId } from '../features/appSlice';
import {useSelector} from "react-redux";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import { db } from './firebase';
import Message from './Message';

const Chat = (props) => {
    
    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId && db
            .collection('rooms')
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, loading])

    // console.log("this is room details", roomDetails?._document.data.value.mapValue.fields.name);
    const roomName = roomDetails?._document.data.value.mapValue.fields.name.stringValue;
    // console.log(roomName);
    // console.log("This is room messages", roomMessages)

    return (
        <div className= {styles.chat_container}>
            <div className= {styles.chat_header}>
                <div className={styles.chat_headerLeft}>
                    <h4><strong>#{roomName}</strong></h4>
                    <StarBorderOutlinedIcon className= {styles.chat_headerLeft_Star}/>
                </div>

                <div className={styles.chat_headerRight}>
                    <p>
                        <InfoOutlinedIcon className= {styles.chat_headerRight_Info}/> Details
                    </p>
                </div>
            </div>

            <div className= {styles.chat_messages}>
                {roomMessages?.docs.map(doc => {
                    const {message, timestamp, user, userImage} = doc.data();
                    return (
                        <Message 
                            key={doc.id}
                            message = {message}
                            timestamp = {timestamp}
                            user = {user}
                            userImage = {userImage}
                        />
                    )
                })}
                <div className={styles.chat_bottom} ref = {chatRef}>

                </div>
            </div>

            <ChatInput channelId = {roomId} channelName = {roomName} chatRef = {chatRef}/>
        </div>
    );
};

export default Chat;