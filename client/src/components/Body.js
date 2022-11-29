import React from 'react';
import styles from "./Body.module.css";
import Sidebar from './Sidebar';

const Body = (props) => {
    return (
        <div className= {styles.body_container}>
            <Sidebar />
        </div>
    );
};

export default Body;