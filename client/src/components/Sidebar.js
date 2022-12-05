import React from 'react';
import styles from "./Sidebar.module.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { auth, db } from './firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

const Sidebar = (props) => {

    const [channels, loading] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth);

    return (
        <div className= {styles.sidebar_container}>
            <div className= {styles.sidebar_header}>
                <div className= {styles.sidebar_info}>
                    <h2>Chat HQ</h2>
                    <h3>
                        <FiberManualRecordIcon className= {styles.fiber_icon}/>
                        {user.displayName}
                    </h3>
                </div>
                <CreateIcon className= {styles.pencil_icon}/>
            </div>

            <SidebarOptions Icon ={<InsertCommentIcon />} title = {"Threads"} />
            <SidebarOptions Icon ={<InboxIcon />} title = {"Mentions & Reactions"} />
            <SidebarOptions Icon ={<DraftsIcon />} title = {"Saved Items"} />
            <SidebarOptions Icon ={<BookmarkIcon />} title = {"Channel Browser"} />
            <SidebarOptions Icon ={<PeopleAltIcon />} title = {"People & User Groups"} />
            <SidebarOptions Icon ={<AppsIcon />} title = {"Apps"} />
            <SidebarOptions Icon ={<FileCopyIcon />} title = {"File Browser"} />
            <SidebarOptions Icon ={<ExpandLessIcon />} title = {"Show Less"} />

            <hr></hr>

            <SidebarOptions Icon={<ExpandMoreIcon />} title ={"Channels"} />

            <hr></hr>

            <SidebarOptions Icon = {<AddIcon />} title = {"Add Channel"} addChannelOption />
            {channels?.docs.map((doc, index) => 
                (
                    <SidebarOptions key = {index} id = {doc.id} title = {doc.data().name} />
                )
            )}
        </div>
    );
};

export default Sidebar;