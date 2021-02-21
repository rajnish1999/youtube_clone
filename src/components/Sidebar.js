import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import '../Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">     
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />    
            <hr />   
            <SidebarRow Icon={VideoLibraryIcon} title="Trending" />
            <SidebarRow Icon={HistoryIcon} title="Subscription" />
            <SidebarRow Icon={OndemandVideoIcon} title="Trending" />
            <SidebarRow Icon={WatchLaterIcon} title="Subscription" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Trending" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Subscription" />
            <hr />
        </div>
    )
}

export default Sidebar
