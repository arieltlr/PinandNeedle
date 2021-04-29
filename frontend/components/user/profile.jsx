import React from 'react';
import ProfileNav from './profile_nav';
import FollowsProfileDisplay from '../follows/profile_options';
import { Link, withRouter } from 'react-router-dom';


class Profile extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            fetchBoards: false,
        }
        this.fetchBoards = this.fetchBoards.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.getBoards(this.props.match.params.userId)
    }
    componentDidUpdate(prevProps) {
        debugger
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.getBoards(this.props.match.params.userId)
        }
    }
    fetchBoards(){
        this.props.getBoards(this.props.match.params.userId);
    }
    render() {
        if (!this.state.fetchBoards) {
            this.state.fetchBoards = !this.state.fetchBoards;
            return null;
        }
        if (!this.props.currentProfile){
            this.fetchBoards();
            return null;
        }
        debugger
        const currentProfile = this.props.currentProfile;
        let usersFollowed;
        let followers;
        currentProfile.users_followed ? usersFollowed = currentProfile.users_followed : null;
        currentProfile.followers ? followers = currentProfile.followers : null;
        let followerCount;
        let followingCount;
        followers ? followerCount = `${Object.keys(followers).length} Follower` : followerCount = "0 Followers";
        usersFollowed ? followingCount = `${Object.keys(usersFollowed).length} Following` : followingCount = "0 Following";
        const currentUserProfile = this.props.currentUser.id === currentProfile.id;
        const email = this.props.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        const profileLetter = email[0].toUpperCase()
        const noBoardsMessage = <h3 className="no-boards-message">{emailName} hasn't saved any Pins yet</h3>;
        let pins = this.props.pins
        let boards = this.props.boards.map((board, index) => {
            const pinCount = board.pins.length
            
            return (
                <li className="board-li" key={index}>
                    <Link className="board-show-link" to={`/board/${board.id}`}>
                        <div className="board-cover">
                            <div className="board-cover-single">
                                {board.pins[0] ? <img src={board.pins[0].photoUrl} className="cover-image3" /> : <div className="cover-image3"></div> }
                            </div>
                            <div className="board-cover-stack">
                                {board.pins[1] ? <img src={board.pins[1].photoUrl} className="cover-image1" /> : <div className="cover-image1"></div> }
                                {board.pins[2] ? <img src={board.pins[2].photoUrl} className="cover-image2" /> : <div className="cover-image2"></div> }       
                            </div>
                        </div>
                        <div className="board-info-container">
                            <div className="board-info">
                                <h2 className="board-cover-name">{board.name}</h2>
                                <div className="board-cover-subinfo">
                                    {board.pins.length === 1 ? <p className="board-cover-pin-count">{pinCount} Pin</p> 
                                        : <p className="board-cover-pin-count">{pinCount} Pins</p>}
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        })
        if (boards.length < 1 ? boards = noBoardsMessage : boards = boards)
            return (

                <div>
                    <div id="profile-page">
                        <div id="profile-circle">
                            <p id="profile-page-letter">{profileLetter}</p>
                        </div>
                        <div className="username-container">
                            <h1 id="profile-page-username">{emailName}</h1>
                            <h3 id="username">@{emailName.toLowerCase()}</h3>
                            <div className="follows">
                                {followers ?  <h3 className="follows-modal-link" onClick={() => this.props.openModal('followers')}>{followerCount}</h3>
                                            : <h3 className="follows-modal-no-link">{followerCount}</h3>
                                }
                                <p id="dot">  •  </p>
                                {usersFollowed ? <h3 className="follows-modal-link" onClick={() => this.props.openModal('users_followed')}>{followingCount}</h3>
                                                : <h3 className="follows-modal-no-link">{followingCount}</h3>
                                }
                            </div>
                        </div>
                        {currentUserProfile ? null : <div className="follows-container">
                            <FollowsProfileDisplay 
                            currentUserId={this.props.currentUser.id} 
                            profileId={currentProfile.id} 
                            followers={currentProfile.followers}
                            usersFollowed={currentProfile.users_followed}
                            createFollow={this.props.createFollow}
                            unfollow={this.props.unfollow} />
                        </div>
                        }

                    </div>
                    <nav className="profile-nav-bar-container" >
                        {currentUserProfile ? <ProfileNav openModal={this.props.openModal} /> : null}
                    </nav>
                    <div className="board-ul-container">
                        <ul className="boards-ul">
                            {boards}
                        </ul>
                    </div>
                </div>
            )
    }
}

export default withRouter(Profile);