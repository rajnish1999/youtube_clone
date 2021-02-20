import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    
    return (
        <div className="header">
            <h1>i am header</h1>
            <MenuIcon />
            <img className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
                alt=""
            />
            <input type="text" />
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <Avatar >OP</Avatar>
        </div>
    )
}

export default Header
