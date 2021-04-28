import React from 'react'

class Follower extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let followStatus;

        return(
            <div>
                <div>
                    <div id="profile-circle">
                        <p id="profile-page-letter">{props.username[0]}</p>
                    </div>
                    <h1 id="profile-page-username">{props.username}</h1>
                </div>
                {/* <div>
                    {followStatus ? 
                <button onClick={this.handleUnfollow} className="profile-follow-button">
                    Unfollow
                    </button> 
                    : 
                <button onClick={this.handleFollow} className="profile-follow-button">
                    Follow</button>}
                </div> */}
            </div>

        )
    }
}

export default Follower