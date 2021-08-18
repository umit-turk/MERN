import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGxhbmRzY2FwZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    )
}

export default Header
