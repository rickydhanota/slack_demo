import React from 'react';
import styles from "./Chat.module.css";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Chat = (props) => {
    return (
        <div className= {styles.chat_container}>
            <div className= {styles.chat_header}>
                <div className={styles.chat_headerLeft}>
                    <h4><strong>#Room-name</strong></h4>
                    <StarBorderOutlinedIcon className= {styles.chat_headerLeft_Star}/>
                </div>

                <div className={styles.chat_headerRight}>
                    <p>
                        <InfoOutlinedIcon className= {styles.chat_headerRight_Info}/> Details
                    </p>
                </div>
            </div>

            <div className= {styles.chat_messages}>

            </div>

            <div className= {styles.chat_input}>

            </div>
        </div>
    );
};

export default Chat;