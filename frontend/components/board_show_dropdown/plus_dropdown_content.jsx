
import React from 'react';

const PlusDropdownContent = (props) => {
    let page;
    if (props.boardShow === "boardShow"){
        page = "board"
    } else if (props.boardShow === "feed"){
        page = "feed"
    } else {
        page = "profile"
    }
    debugger
    return (
        <ul className="create-drop-down" id={page} >
            <li id="dropdown-header">
                <span className="dropdown-header">Create</span>
            </li>
            {props.boardShow === "boardShow" ? 
                <li onClick={()=> props.openModal('create-pin')}> 
                Pin
                </li>
                :
                <li onClick={()=> props.openModal('create-pin-from-profile')}> 
                Pin
                </li>
            } 
            {props.boardShow === "profile" ? 
                <li onClick={()=> props.openModal("createBoard")}> 
                Board
                </li>
                :
                null
            }
            
        </ul>

)
}

export default PlusDropdownContent;