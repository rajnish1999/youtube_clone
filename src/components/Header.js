import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications"
import '../Header.css';

function Header() {
    
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
                    alt=""
                />
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>
            <div className="header__icons">
                <VideoCallIcon classNamer="header_icon"/>
                <AppsIcon classNamer="header_icon"/>
                <NotificationsIcon classNamer="header_icon"/>
                <Avatar >OP</Avatar>
            </div>
            
        </div>
    )
}

export default Header
