import React from 'react';

const FollowsProfileDisplay = (props) => {
    if (props.props) {
        return (
            null
        )
    } else {
        return(
            <button className="profile-follow-button">Follow</button>
        )
        
    }
}

export default FollowsProfileDisplay;