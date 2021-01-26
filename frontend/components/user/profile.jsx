import React from 'react';
import boardsContainer from '../boards/boards_container';

class Profile extends React.Component {

    render() {
        // debugger
        const emailName = this.props.user.email.split('@')[0].toUpperCase()
        const profileName = this.props.user.email[0].toUpperCase()
        return (
            <div>
                <div id="profile-page">
                    <div id="profile-circle">
                        <p id="profile-page-letter">{profileName}</p>
                    </div>
                    <h1 id="profile-page-username">{emailName}</h1>
                </div>
                <boardsContainer />
            </div>
        )
    }
}

export default Profile;