import React from 'react'

class Follower extends React.Component {
    constructor(props){
        super(props)
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

        handleFollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.profileId,
            follower_id: this.props.currentUserId
        }
        
        this.props.createFollow(follow);

    }
    handleUnfollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.profileId,
            follower_id: this.props.currentUserId
        }
        this.props.unfollow(follow);

    }
    render(){
        let followStatus;
        debugger
        if (this.props.currentUserId !== this.props.followerId) {
            debugger
            if (this.props.profileFollowers && this.props.profileFollowers.includes(this.props.currentUserId)){
                followStatus = true;
            } else {
                followStatus = false;
            }
        }
        return(
            <div>
                <div>
                    <div id="profile-circle">
                        <p id="profile-page-letter">{this.props.username[0]}</p>
                    </div>
                    <h1 id="profile-page-username">{this.props.username}</h1>
                </div>
                <div> 
                    {this.props.currentUserId !== this.props.followerId 
                        ?
                            <div>
                                {followStatus ? 
                                    <button onClick={this.handleUnfollow} className="profile-follow-button">
                                        Unfollow
                                        </button> 
                                        : 
                                    <button onClick={this.handleFollow} className="profile-follow-button">
                                        Follow</button>
                                }
                            </div>
                        : 
                            null
                    }
                </div>
            </div>

        )
    }
}

export default Follower;