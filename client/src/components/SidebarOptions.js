import React from 'react';
import { db } from './firebase';
import styles from "./SidebarOptions.module.css";
import {useCollection} from "react-firebase-hooks/firestore";
import {useDispatch} from "react-redux";
import { enterRoom } from '../features/appSlice';

const SidebarOptions = (props) => {
    
    const {Icon, title, addChannelOption, id} = props;

    const [channels, loading, error] = useCollection(db.collection("rooms"))
    const dispatch =useDispatch()

    // console.log(channels);

    const addChannel = () => {
        console.log("Add channel function is being triggered");
        const channelName = prompt("Please enter the channel name");
        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            });
        }
    }

    const selectChannel = () => {
        console.log("Select channel function is being triggered");
        if (id) {
            dispatch(enterRoom({
                roomId: id,
            }))
        }
    }

    return (
        <div className= {styles.sidebarOption_container} onClick = {addChannelOption ? addChannel : selectChannel}>
            {Icon && Icon}
            {Icon ? (
                <h3 className={styles.sidebarOption_chat}>{title}</h3>
            ) : (
                <h3 className= {styles.sidebarOption_channel}>
                    <span>#</span> {title}
                </h3>
            )}
        </div>
    );
};

export default SidebarOptions;