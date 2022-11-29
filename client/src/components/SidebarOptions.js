import React from 'react';
import styles from "./SidebarOptions.module.css";

const SidebarOptions = (props) => {
    
    const {Icon, title, addChannelOption} = props;

    return (
        <div className= {styles.sidebarOption_container}>
            {Icon && Icon}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <div className= {styles.sidebarOption_channel}>
                    <span>#</span> {title}
                </div>
            )}
        </div>
    );
};

export default SidebarOptions;