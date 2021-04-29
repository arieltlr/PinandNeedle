import React from 'react';
import Follower from "./follower"

class Followers extends React.Component {
constructor(props){
        super(props)
        this.state = {
            followEvent: false,
        }
        
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    handleFollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.profileId,
            follower_id: this.props.currentUserId
        }
        
        this.props.createFollow(follow).then(
        this.setState({followEvent: !followEvent}))

    }
    handleUnfollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.profileId,
            follower_id: this.props.currentUserId
        }
        this.props.unfollow(follow);
        this.setState({followEvent: !followEvent})

    }

    render(){
        if (!this.props.currentProfile){
            return null;
        }

        let followers;
        if (this.props.currentProfile.followers){
            followers = Object.values(this.props.currentProfile.followers).map((follower, idx) => {
                return (
                    <Follower
                        key={idx} 
                        username={follower.username} 
                        followerId={follower.id} 
                        currentUserId={this.props.currentUser.id}
                        followerFollowers={follower.followers}
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
                    <h3>Followers</h3>
                </div>
                <ul>{followers}</ul>
            </div>
        )
        
    }
}

export default Followers;