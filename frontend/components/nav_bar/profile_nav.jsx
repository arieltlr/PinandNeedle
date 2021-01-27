import React from 'react';

const ProfileNav = (props) => {
    return (
        <div className="profile-nav-bar">
            <div className="edit-icon">
            </div>
            <div className="add-item-icon" onClick={() => props.openModal("createBoard")}>
            </div>
        </div>
    )
}
export default ProfileNav;