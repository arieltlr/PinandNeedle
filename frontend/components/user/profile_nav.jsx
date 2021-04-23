import React from 'react';
import BoardPlusDD from '../board_show_dropdown/plus_dropdown';

const ProfileNav = (props) => {
    return (
        <div className="profile-nav-bar">
            <div>
            </div>
            <div className="profile-nav-add-button">
                <BoardPlusDD openModal={props.openModal} boardShow={"profile"}/>
            </div>
            
        </div>
    )
}
export default ProfileNav;