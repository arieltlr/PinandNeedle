import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="nav-bar">
                    <div className="nav-ele" id="header-logo-circle"  alt="needle_icon" ></div>
                    <button className="nav-ele"id="nav-home">Home</button>
                    <button className="nav-ele"id="nav-following">Following</button>
                    {/* <div className="nav-ele"> */}
                    <input className="nav-ele" id="search-bar" type="text" placeholder="Search" />
                        {/* <i className="nav-ele" id="search-icon" src={window.search_icon} alt="magnifying-glass"></i> */}
                    {/* </div> */}
                    {/* <img className="nav-ele"id="notification-icon" src={window.notification} alt="notification bell"/> */}

                    <p className="nav-ele"id="profile-button">{this.props.user.username[0]}</p>
                    <div className="nav-ele" id="down-icon-circle" alt="down-icon"></div>

                </nav>
                <button id="holder" className="red-button" onClick={this.props.logout}>Logout</button>

            </div>
        )
    }
}

export default NavBar;