import React from 'react';
import BoardOptions from './board_options';
import FollowsProfileDisplay from '../follows/profile_options';
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class BoardShow extends React.Component {

    componentDidMount(){
        const currentBoard = parseInt(this.props.match.params.boardId)
        this.props.getBoard(currentBoard)
    }
    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params !== prevProps.match.params) {
    //         this.props.getBoards(this.props.match.params.userId)
    //     }
    // }

    render() {
        // debugger
        if (!this.props.board) {
            return null;
        }

        const board = this.props.board;
        const currentUser = this.props.currentUser;
        // debugger
        const currentUsersBoard = Boolean(currentUser.id === board.user_id);
        // const thisProfile = this.props.thisProfile;
        // const currentUserProfile = this.props.theCurrentUser.id === parseInt(thisProfile);
        const email = this.props.currentUser.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
        const profileLetter = email[0].toUpperCase();
        // const noBoardsMessage = <h3 className="no-boards-message">{emailName} hasn't saved any Pins yet</h3>;

        // let boards = this.props.boards.map((board, index) => {
        //     return (
        //         <li className="board-li" id={index}>
        //             <Link to={`/board/${board.id}`}>
        //                 <div className="board-cover">
        //                     <div className="board-cover-single">
        //                         <img src={window.pin1} className="cover-image3" />
        //                     </div>
        //                     <div className="board-cover-stack">
        //                         <img src={window.pin4} className="cover-image1" />
        //                         <img src={window.brown_sweater} className="cover-image2" />
        //                     </div>
        //                 </div>
        //                 <div className="board-info-container">
        //                     <div className="board-info">
        //                         <h2 className="board-cover-name">{board.name}</h2>
        //                         <div className="board-cover-subinfo">
        //                             <p className="board-cover-pin-count">3 Pins</p>
        //                             <p className="board-age">1d</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </Link>
        //         </li>
        //     )
        // })
            if (currentUsersBoard){
                return (

                    <div>
                        <div id="board-show-page">
                            <div className="board-name-container">
                                <h1 id="board-name">{board.name}</h1>
                                <div className="three-dots" onClick={() => this.props.openModal("edit-board")}></div>
                            </div>
                            <div className="user-info-container">
                                {/* <Link id="profile-link" to={`/users/${this.props.boardOwner.id}`}> */}
                                    <div id="small-profile-circle">
                                    <p id="small-profile-page-letter">{profileLetter}</p>
                                </div>
                                {/* </Link> */}
                                {/* <BoardOptions currentUsersBoard={currentUsersBoard} emailName={emailName} /> */}
                                <div className="icon-options-container">
                                    <div className="ideas-container">
                                        <Link to="/feed">
                                            <div className="ideas-icon"></div>
                                            <p className="icon-text">More ideas</p>
                                        </Link>
                                    </div>
                                    <div className="notes-container">
                                        <div className="notes-icon" onClick={() => this.props.openModal("edit-board")}></div>
                                        <p className="icon-text">Notes</p>
                                    </div>
                                    
                                </div>

                            </div>
                            {/* <BoardOptions currentUsersBoard={currentUsersBoard} emailName={emailName} /> */}
                            <div className="follows-container">
                                <p className="board-description">{board.description ? board.description : null}</p>
                            </div>
                            

                        </div>

                        

                    </div>
                )
            } else {
                return (
                    
                    <div>
                        <div id="board-show-page">
                            <div className="board-name-container">
                                <h1 id="board-name">{board.name}</h1>
                                {/* <div className="three-dots" onClick={() => this.props.openModal("edit-board")}></div> */}
                            </div>
                            <div className="user-info-container">
                                {/* <Link to={`/users/${this.props.boardOwner.id}`}> */}
                                    <div id="small-profile-circle">
                                    <p id="small-profile-page-letter">{profileLetter}</p>
                                </div>
                                {/* </Link> */}
                                <h1 className="username">{emailName}</h1>
                            </div>

                            <div className="follows-container">
                                
                            </div>

                        </div>

                        {/* <div className="board-ul-container">
                            <ul className="boards-ul">
                                {boards}
                            </ul>
                        </div> */}
                    </div>
                )
        }
    }

}

export default BoardShow;