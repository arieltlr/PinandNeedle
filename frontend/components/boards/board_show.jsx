import React from 'react';
import BoardOptions from './board_options';
import FollowsProfileDisplay from '../follows/profile_options';
import {Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BoardPlusDD from '../board_show_dropdown/plus_dropdown';
import Masonry from 'react-masonry-css';


class BoardShow extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            fetchBoard: false
        }

    }

    componentDidMount(){
        // debugger
        this.props.getBoard(this.props.match.params.boardId)
    }

    render() {
        if (!this.state.fetchBoard){
            // debugger
            this.state.fetchBoard = true;
            return null;
        }
        const board = this.props.board;
        const currentUser = this.props.currentUser;
        let users = this.props.users;
        const currentUsersBoard = Boolean(currentUser.id === board.user_id);
        const email = this.props.board.owner_email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
        const profileLetter = email[0].toUpperCase();
        const noPinsMessage = <h3 className="no-boards-message">{emailName} hasn't saved any Pins yet</h3>;
        
        let pinArray = Object.values(this.props.pins);
        debugger
        let pins = pinArray.map((pin, index) => {
            debugger
            const pinEmail = pin.owner_email.split('@')[0]
            const pinEmailName = pinEmail[0].toUpperCase() + pinEmail.slice(1).toLowerCase();
            const pinProfileLetter = pinEmail[0].toUpperCase();
            return (
                <div className="pin-item">
                    <Link to={`/pin/${pin.id}`} >
                        <div className="pin-container" key={index}>
                            <img src={pin.photoUrl} 
                                className="pin-image" 
                            />
                            <p className="title-under-pin">{pin.title}</p>
                            <div className="pin-owner-info">
                                <div className="small-profile-circle" id="cirle-under-pin">
                                    <p className="small-profile-page-letter" id="letter-under-pin">{pinProfileLetter}</p>
                                </div>
                                <p className="emailname-under-pin">{pinEmail}</p>
                            </div>
                            
                        </div>
                    </Link>
                </div>
            )
        })
        const breakpointColumnsObj = {
            default: 4,
            1920: 7,
            1366: 5,
            1100: 3,
            700: 2,
            500: 2,
            250: 1,
        };
        pins = pins.reverse();
        // debugger
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

                        {pins.length > 0 ?  
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {pins}
                        </Masonry>
                        : noPinsMessage}

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
                            {pins.length > 0 ? 
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                                {pins}
                            </Masonry> 
                            : noPinsMessage}
                        </div>
                    </div>
                )
        }
    }

}

export default withRouter(BoardShow);