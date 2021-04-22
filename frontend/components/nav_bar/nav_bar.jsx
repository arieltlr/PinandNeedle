import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowDropdown from '../arrow_dropdown/arrow_dropdown';
import SearchBar from "./search_bar";

class NavBar extends React.Component {

    render() {
        // debugger
        return (
            <div>
                <nav className="nav-bar">
                    <NavLink to="/feed">
                        <div className="nav-ele" id="header-logo-circle" alt="needle_icon" ></div>
                    </NavLink>
                    <NavLink to="/feed">
                        <button className="nav-ele"id="nav-home">Home</button>
                    </NavLink>
                    <NavLink to="/following">
                        <button className="nav-ele" id="nav-following">Following</button>
                    </NavLink>
                    <SearchBar searchPins={this.props.searchPins}/>
                    <NavLink to={`/user/${this.props.user.id}`}>
                        <p className="nav-ele" id="profile-button">{this.props.user.email[0].toUpperCase()}</p>
                    </NavLink>
                    <ArrowDropdown user={this.props.user} logout={this.props.logout}/>
                </nav>
            </div>
        )
    }
}

export default NavBar;