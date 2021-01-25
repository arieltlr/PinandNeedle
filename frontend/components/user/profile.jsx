import React from 'react';

class Profile extends React.Component {

    render() {
        // debugger
        return (
            <div id="profile-page">
                <div id="profile-circle">
                    <p id="profile-page-letter">{this.props.user.username[0]}</p>
                </div>
                <h1 id="profile-page-username">{this.props.user.username}</h1>
            </div>
        )
    }
}

export default Profile;