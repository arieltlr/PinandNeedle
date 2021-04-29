import React from 'react';
import { Link } from 'react-router-dom';

class Follower extends React.Component {
    constructor(props){
        super(props)
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    handleFollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.followerId,
            follower_id: this.props.currentUserId
        }
        
        this.props.createFollow(follow);

    }
    handleUnfollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.followerId,
            follower_id: this.props.currentUserId
        }
        this.props.unfollow(follow);

    }
    render(){
        
        let followStatus;
        
        if (this.props.currentUserId !== this.props.followerId) {
            
            if (this.props.profileFollowers && this.props.profileFollowers.includes(this.props.currentUserId)){
                followStatus = true;
            } else {
                followStatus = false;
            }
        }
        
        return(
            <div className="followers-modal-outer-container">
                <div className="followers-modal-title">
                    <h3>Followers</h3>
                </div>
                <div className="followers-modal-follower-container">

                <Link to={`/user/${this.props.followerId}`}>
                    <div className="followers-modal-user-info">
                        <div className="small-profile-circle">
                            <p className="small-profile-page-letter">{this.props.username[0]}</p>
                        </div>
                        <h1 id="followers-modal-username">{this.props.username}</h1>
                    </div>
                </Link>
                
                <div className="followers-modal-button-container"> 
                    {/* {this.props.currentUserId !== this.props.followerId 
                        ?
                            <div>
                                {followStatus ? 
                                    <button onClick={this.handleUnfollow} className="follow-modal-follow-button">
                                        Unfollow
                                        </button> 
                                        : 
                                    <button onClick={this.handleFollow} className="follow-modal-follow-button">
                                        Follow</button>
                                }
                            </div>
                        : 
                            null
                    } */}
                </div>
            </div>
            </div>

        )
    }
}

export default Follower;