import React from 'react';
import styles from "./Header.module.css";
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth";

const Header = (props) => {

    const [user] = useAuthState(auth);
    // console.log("user is ", user);

    return (
        <div className= {styles.header_container}>
            <div className= {styles.header_left}>
                <Avatar className= {styles.header_left_avatar} 
                    src = {user?.photoURL}
                    alt = {user?.displayName}
                    onClick = {() => auth.signOut()}
                />
                <AccessTimeIcon className= {styles.header_left_time}  />
            </div>

            <div className= {styles.header_search}>
                <SearchIcon className= {styles.search_icon} />
                <input placeholder='Search Channel' />
            </div>

            <div className= {styles.header_right}>
                <HelpOutlineIcon className= {styles.help_icon} />
            </div>
        </div>
    );
};

export default Header;