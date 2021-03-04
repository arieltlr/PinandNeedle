import React from 'react';
import BoardOptions from './board_options';
import FollowsProfileDisplay from '../follows/profile_options';
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BoardPlusDD from '../board_show_dropdown/plus_dropdown';


class BoardShow extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            fetchBoard: false
        }

    }

    componentDidMount(){
        debugger
        this.props.getBoard(this.props.match.params.boardId)
    }

    render() {
        if (!this.state.fetchBoard){
            debugger
            this.state.fetchBoard = true;
            return null;
        }
        const board = this.props.board;
        const currentUser = this.props.currentUser;
        const currentUsersBoard = Boolean(currentUser.id === board.user_id);
        const email = this.props.board.user.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
        const profileLetter = email[0].toUpperCase();
        const noPinsMessage = <h3 className="no-boards-message">{emailName} hasn't saved any Pins yet</h3>;
        debugger
        let pinArray = Object.values(this.props.pins);
        let pins = pinArray.map((pin, index) => {
            return (
                <Link to={`/pin/${pin.id}`} >
                    <div className="pin-container" key={index}>
                        <img src={pin.photoUrl} 
                            className="pin-image" 
                        />
                        <p className="title-under-pin">{pin.title}</p>
                        <div className="pin-owner-info">
                            <div className="small-profile-circle" id="cirle-under-pin">
                                <p className="small-profile-page-letter" id="letter-under-pin">{profileLetter}</p>
                            </div>
                            <p className="emailname-under-pin">{emailName}</p>
                        </div>
                        
                    </div>
                </Link>
            )
        })
        debugger
            if (currentUsersBoard){
                return (

                    <div>
                        <div id="board-show-page">
                            <div className="board-name-container">
                                <h1 id="board-name">{board.name}</h1>
                                <div className="three-dots" onClick={() => this.props.openModal("edit-board")}></div>
                            </div>
                            <div className="user-info-container">
                                    <div className="small-profile-circle">
                                        <p className="small-profile-page-letter">{profileLetter}</p>
                                    </div>
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
                            <div className="follows-container">
                                <p className="board-description">{board.description ? board.description : null}</p>
                            </div>
                            
                            <BoardPlusDD openModal={this.props.openModal}/>

                        </div>

                        <div className="master-pin-container">
                            {pins.length > 0 ? pins : noPinsMessage}
                        </div>

                    </div>
                )
            } else {
                return (
                    
                    <div>
                        <div id="board-show-page">
                            <div className="board-name-container">
                                <h1 id="board-name">{board.name}</h1>
                            </div>
                            <div className="user-info-container">
                                    <div className="small-profile-circle">
                                    <p className="small-profile-page-letter">{profileLetter}</p>
                                </div>
                                <h1 className="username">{emailName}</h1>
                            </div>

                            <div className="follows-container">
                                
                            </div>

                        </div>
                        <div className="master-pin-container">
                            {pins.length > 0 ? pins : noPinsMessage}
                        </div>
                    </div>
                )
        }
    }

}

export default withRouter(BoardShow);