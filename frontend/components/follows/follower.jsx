import React from 'react'

class Follower extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let followStatus;
        debugger
        return(
            <div>
                <div>
                    <div id="profile-circle">
                        <p id="profile-page-letter">{this.props.username[0]}</p>
                    </div>
                    <h1 id="profile-page-username">{this.props.username}</h1>
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

export default Follower;