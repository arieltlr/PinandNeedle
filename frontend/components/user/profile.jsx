import React from 'react';
import ProfileNav from './profile_nav';
import FollowsProfileDisplay from '../follows/profile_options';
import { Link, withRouter } from 'react-router-dom';

class Profile extends React.Component {

    componentDidMount() {
        this.props.getBoards(this.props.match.params.userId)
    }
    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.getBoards(this.props.match.params.userId)
        }
    }
    render() {
        // debugger
        if (!this.props.email[0]) {
            return null;
        }

        const thisProfile = this.props.thisProfile;
        const currentUserProfile = this.props.theCurrentUser.id === parseInt(thisProfile);
        const email = this.props.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        const profileLetter = email[0].toUpperCase()
        const noBoardsMessage = <h3 className="no-boards-message">{emailName} hasn't saved any Pins yet</h3>;
        let pins = this.props.pins
        let boards = this.props.boards.map((board, index) => {
            debugger
            const pinCount = board.pins.length
            return (
                <li className="board-li" key={`${index}`}>
                    <Link className="board-show-link" to={`/board/${board.id}`}>
                        <div className="board-cover">
                            <div className="board-cover-single">
                                {board.pins[0] ? <img src={pins[board.pins[0]].photoUrl} className="cover-image3" /> : <div className="cover-image3"></div> }
                            </div>
                            <div className="board-cover-stack">
                                {board.pins[1] ? <img src={pins[board.pins[1]].photoUrl} className="cover-image1" /> : <div className="cover-image1"></div> }
                                {board.pins[2] ? <img src={pins[board.pins[2]].photoUrl} className="cover-image2" /> : <div className="cover-image2"></div> }       
                            </div>
                        </div>
                        <div className="board-info-container">
                            <div className="board-info">
                                <h2 className="board-cover-name">{board.name}</h2>
                                <div className="board-cover-subinfo">
                                    {board.pins.length === 1 ? <p className="board-cover-pin-count">{pinCount} Pin</p> 
                                        : <p className="board-cover-pin-count">{pinCount} Pins</p>}
                                    <p className="board-age">7d</p>
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
                                <h3> 1 Follower</h3 >
                                <p id="dot">  •  </p>
                                <h3>1 Following</h3>
                            </div>
                        </div>
                        <div className="follows-container">
                            <FollowsProfileDisplay props={Boolean(currentUserProfile)} />
                        </div>

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