import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowDropdown from '../arrow_dropdown/arrow_dropdown';
import SearchBar from "./search_bar";

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.handleLink = this.handleLink.bind(this);
    }

    handleLink(e){
        e.preventDefault()
        
        window.open(`${e.target.dataset.id}`)
    }

    render() {
        return (
            <div className="nav-container">
                <nav className="nav-bar">
                    <NavLink to="/feed">
                        <div className="nav-ele" id="header-logo-circle" alt="needle_icon" ></div>
                    </NavLink>
                    <NavLink to="/feed">
                        <button className="nav-ele"id="nav-home">Home</button>
                    </NavLink>
                    {/* <NavLink to="/following">
                        <button className="nav-ele" id="nav-following">Following</button>
                    </NavLink> */}
                    <SearchBar searchPins={this.props.searchPins}/>
         
                    <img id="personal-links" src={window.linkedIn} alt="LinkedIn Logo" data-id="https://www.linkedin.com/in/taylorariel/" onClick={this.handleLink}/>
                    
                    <img id="personal-links" src={window.github} alt="Github Logo" onClick={this.handleLink} data-id="https://github.com/arieltlr"/>
                    <img id="personal-links" src={window.angelList} alt="AngelList Logo"  onClick={this.handleLink} data-id="https://angel.co/u/ariel-taylor"/>
                    <NavLink to={`/user/${this.props.user.id}`}>
                        <p className="nav-ele" id="profile-button">{this.props.user.email[0].toUpperCase()}</p>
                    </NavLink>
                    <div className="logout-dropdown">
                        <ArrowDropdown user={this.props.user} logout={this.props.logout} />
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;