
import React from 'react';
import { Link } from 'react-router-dom';

const DropdownContent = (props) => {
    return (
        <ul id="arrow-dropdown" >
            <li id="dropdown-header">
                <span className="dropdown-header" >Options</span>
            </li>
            <li>
                <Link className="dropdown-link" to={`/user/${props.user.id}/edit`}>Settings</Link>
            </li>
            <li onClick={props.logout}>
                Log out
                </li>
        </ul>

)
}

export default DropdownContent;