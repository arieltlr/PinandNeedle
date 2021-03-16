import React from 'react';
import BoardPlusDDProfile from '../board_show_dropdown/plus_dropodown_profile';

const ProfileNav = (props) => {
    return (
        <div className="profile-nav-bar">
            <div className="edit-icon">
            </div>
            {/* <div className="add-item-icon" onClick={() => props.openModal("createBoard")}>
            </div> */}
            <div className="profile-nav-add-button">
                <BoardPlusDDProfile openModal={props.openModal} boardShow={false}/>
            </div>
            
        </div>
    )
}
export default ProfileNav;