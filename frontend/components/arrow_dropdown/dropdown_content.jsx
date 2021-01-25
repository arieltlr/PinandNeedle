
import React from 'react';
import { NavLink } from 'react-router-dom';

const DropdownContent = (props) => {
    return (
        <ul id="arrow-dropdown" >
            <li id="dropdown-header">
                <span className="dropdown-header" >Options</span>
            </li>
            <li>
                <NavLink to={`/user/${props.user.id}`}>Settings</NavLink>
            </li>
            <li onClick={props.logout}>
                Log out
                </li>
        </ul>

)
}

export default DropdownContent;