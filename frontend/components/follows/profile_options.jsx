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
            follower_id: this.props.currentUserId,
            profile_id: this.props.profileId
        }
        this.props.createFollow(follow)
            .then(this.props.getBoards(this.props.profileId));
    }
    handleUnfollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.profileId,
            follower_id: this.props.currentUserId,
            profile_id: this.props.profileId
        }
        this.props.unfollow(follow)
            .then(this.props.getBoards(this.props.profileId));

    }

    render(){
        let followStatus;
        let currentUsersUsersFollowed = [];
        let currentProfileFollowers = []
        if (this.props.currentUsersUsersFollowed){
            currentUsersUsersFollowed = Object.keys(this.props.currentUsersUsersFollowed).map(key => {
            return(
                parseInt(key)
            )
        })
        }
        if (this.props.followers){
            currentProfileFollowers = Object.keys(this.props.followers).map(key => {
                return (
                    parseInt(key)
                )
            })
        }
        
        if (currentUsersUsersFollowed.includes(this.props.profileId)|| currentProfileFollowers.includes(this.props.profileId)){
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