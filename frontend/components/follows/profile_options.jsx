import React from 'react';

class FollowsProfileDisplay extends React.Component {
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
        let currentProfileFollowerIds = [];
        let currentUsersUsersFollowed = [];
        if (this.props.currentUsersUsersFollowed){
            currentUsersUsersFollowed = Object.keys(this.props.currentUsersUsersFollowed).map(key => {
            return(
                parseInt(key)
            )
        })
        }
        if (this.props.followers && currentUsersUsersFollowed.includes(this.props.profileId)){
        //     currentProfileFollowerIds = Object.keys(this.props.followers);
        // }
        // if (currentProfileFollowerIds.includes(this.props.currentUserId.toString())){
            followStatus = true;
        } else{
            
            followStatus = false;
        }
        return(
            <div>
                {followStatus ? 
                <button onClick={this.handleUnfollow} className="profile-follow-button">
                    Unfollow
                    </button> 
                    : 
                <button onClick={this.handleFollow} className="profile-follow-button">
                    Follow</button>}

            </div>
        )
        
    }
}

export default FollowsProfileDisplay;