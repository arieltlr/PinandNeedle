import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="nav-bar">
                    <img className="nav-ele" id="header-logo" src={window.logo} alt="needle_icon" />
                    <button className="nav-ele"id="nav-home">Home</button>
                    <button className="nav-ele"id="nav-following">Following</button>
                    <input className="nav-ele"id="search-bar" type="text" placeholder="Search"/>
                    <img className="nav-ele"id="notification-icon" src={window.notification} alt="notification bell"/>
                    <button className="nav-ele"id="profile-button">{this.props.user.username[0]}</button>
                    <img className="nav-ele" id="down-icon" src={window.down_icon} alt="down-icon"/>

                </nav>
                <button id="holder" className="red-button" onClick={this.props.logout}>Logout</button>

            </div>
        )
    }
}

export default NavBar;