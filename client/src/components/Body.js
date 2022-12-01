import React from 'react';
import styles from "./Body.module.css";
import Sidebar from './Sidebar';
import Chat from './Chat';

const Body = (props) => {
    return (
        <div className= {styles.body_container}>
            <Sidebar />
            <Chat />
        </div>
    );
};

export default Body;