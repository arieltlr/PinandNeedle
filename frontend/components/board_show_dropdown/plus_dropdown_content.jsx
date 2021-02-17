
import React from 'react';

const PlusDropdownContent = (props) => {
    return (
        <ul id="plus-dropdown" >
            <li id="dropdown-header">
                <span className="dropdown-header">Create</span>
            </li>
            <li onClick={()=> props.openModal('create-pin')}> 
                Pin
            </li>
        </ul>

)
}

export default PlusDropdownContent;