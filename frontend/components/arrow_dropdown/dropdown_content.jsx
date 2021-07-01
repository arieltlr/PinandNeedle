
import React from 'react';
import { NavLink } from 'react-router-dom';

const DropdownContent = (props) => {
    return (
        <ul id="arrow-dropdown" >
            <li id="dropdown-header">
                <span className="dropdown-header" >Options</span>
            </li>
            <li onClick={props.logout}>
                Log out
                </li>
        </ul>

)
}

export default DropdownContent;