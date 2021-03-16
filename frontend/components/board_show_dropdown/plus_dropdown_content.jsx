
import React from 'react';

const PlusDropdownContent = (props) => {
    return (
        <ul id="plus-dropdown" >
            <li id="dropdown-header">
                <span className="dropdown-header">Create</span>
            </li>
            {props.boardShow ? 
                <li onClick={()=> props.openModal('create-pin')}> 
                Pin
                </li>
                :
                <li onClick={()=> props.openModal('create-pin-from-profile')}> 
                Pin
                </li>
            } 
            <li onClick={()=> props.openModal("createBoard")}> 
                Board
            </li>
        </ul>

)
}

export default PlusDropdownContent;