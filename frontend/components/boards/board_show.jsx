import React from 'react';
import BoardOptions from './board_options';
import FollowsProfileDisplay from '../follows/profile_options';
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BoardPlusDD from '../board_show_dropdown/plus_dropdown';


class BoardShow extends React.Component {

    componentDidMount(){
        debugger
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

        // let pins = this.props.board.pins.map((pin, index) => {
        //     return (
        //         <li className="pin-li" id={`${index}`}>
        //                 <div className="pin-container">
        //                     <img src={pin.photoUrl} 
        //                         className="pin-image" 
        //                         id={ index % 2 === 0 ? "square" : "rectangle"} 
        //                     />
        //                 </div>
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
                            
                            <BoardPlusDD openModal={this.props.openModal}/>

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
                        <div className="master-pin-container">
                            <ul className="pin-ul-container">
                                {/* {pins} */}
                            </ul>
                        </div>
                    </div>
                )
        }
    }

}

export default withRouter(BoardShow);