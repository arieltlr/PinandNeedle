import React from 'react';
import { Link } from 'react-router-dom';

class UserFollowed extends React.Component {
    constructor(props){
        super(props)
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    handleFollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.userId,
            follower_id: this.props.currentUserId
        }
        
        this.props.createFollow(follow);

    }
    handleUnfollow(e){
        e.preventDefault();
        const follow = {
            user_id: this.props.userId,
            follower_id: this.props.currentUserId
        }
        this.props.unfollow(follow);

    }
    render(){
        
        let followStatus;
        
        if (this.props.currentUserId !== this.props.userId) {
            
            if (this.props.followers && this.props.followers.includes(this.props.currentUserId)){
                debugger
                followStatus = true;
            } else {
                debugger
                followStatus = false;
            }
        }
        
        return(
            <div className="followers-modal-outer-container">
                <div className="followers-modal-follower-container">

                <Link to={`/user/${this.props.userId}`}>
                    <div className="followers-modal-user-info">
                        <div className="small-profile-circle">
                            <p className="small-profile-page-letter">{this.props.username[0]}</p>
                        </div>
                        <h1 id="followers-modal-username">{this.props.username}</h1>
                    </div>
                </Link>
                
                <div className="followers-modal-button-container"> 
                    {this.props.currentUserId !== this.props.userId 
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
                    }
                </div>
            </div>
            </div>

        )
    }
}

export default UserFollowed;