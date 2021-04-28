import React from 'react';
import Follower from "./follower"

class UsersFollowed extends React.Component {
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
        let followers;
        let currentProfileFollowerIds = [];
        if (this.props.currentProfile.followers){
            followers = Object.values(this.props.currentProfile.followers).map((follower, idx) => {
                return (
                    <Follower username={follower.username} followerId={follower.id} currentUserId={this.props.currentUser.id}/> 
                )
            });
        }
        return(
            <div>
                {followers ? 
                    <ul>{followers}</ul>
                    :
                    <h3>{this.props.currentProfile.username} does not follow any users</h3>
                }

            </div>
        )
        
    }
}

export default UsersFollowed;