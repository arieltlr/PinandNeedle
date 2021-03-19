
import React from 'react';

const PlusDropdownContent = (props) => {
    let page;
    props.boardShow ? page = "board" : page = "profile";
    return (
        <ul className="create-drop-down" id={page} >
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
            {props.boardShow ? 
                null
                :
                <li onClick={()=> props.openModal("createBoard")}> 
                Board
                </li>
            }
            
        </ul>

)
}

export default PlusDropdownContent;