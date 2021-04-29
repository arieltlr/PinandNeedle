import React from 'react';
import UserFollowed from "./user_followed"

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
        
        if (!this.props.currentProfile){
            return null;
        }
        
        let following;
        debugger
        if (this.props.currentProfile.users_followed){
            following = Object.values(this.props.currentProfile.users_followed).map((user, idx) => {
                let usersFollowers;
                user.followers ? usersFollowers = user.followers : usersFollowers = [];
                debugger
                return (
                    <UserFollowed
                        key={idx} 
                        username={user.username} 
                        userId={user.id} 
                        currentUserId={this.props.currentUser.id}
                        followers={usersFollowers}
                        unfollow={this.props.unfollow}
                        createFollow={this.props.createFollow}
                        currentUsersUsersFollowed={this.props.currentUser.users_followed}
                    /> 
                )
            });
        }
        
        return(
            <div>
                <div className="followers-modal-title">
                    <h3>Following</h3>
                </div>
                <ul>{following}</ul>
            </div>
        )
        
    }
}


export default UsersFollowed;