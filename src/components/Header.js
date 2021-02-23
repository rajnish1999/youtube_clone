import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications"
import '../Header.css';

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to='/'>
                    <img className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
                        alt=""
                    />
                </Link>
            </div>
            <div className="header__input">
                <input value={inputSearch} onChange={ (e) => setInputSearch(e.target.value)} type="text" placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
                
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon classNamer="header_icon"/>
                <NotificationsIcon classNamer="header_icon"/>
                <Avatar >OP</Avatar>
            </div>
            
        </div>
    )
}

export default Header
