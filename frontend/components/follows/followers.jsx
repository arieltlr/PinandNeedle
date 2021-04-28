import React from 'react';
import Follower from "./follower"

class Followers extends React.Component {
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
        debugger
        if (this.props.currentProfile.followers){
            followers = Object.values(this.props.currentProfile.followers).map((follower, idx) => {
                return (
                    <Follower
                        key={idx} 
                        username={follower.username} 
                        followerId={follower.id} 
                        currentUserId={this.props.currentUser.id}
                        profileFollowers={follower.followers}
                        unfollow={this.props.unfollow}
                        createFollow={this.props.createFollow}
                    /> 
                )
            });
        }
        
        return(
            <div>
                <ul>{followers}</ul>
            </div>
        )
        
    }
}

export default Followers;