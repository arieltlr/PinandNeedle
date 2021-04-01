import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '../board_list_dropdown/board_item';
import BoardDropdown from './boards_dropdown';


class PinItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            show_dropdown: false,
            pin: this.props.pin,
        }
        this.onHover = this.onHover.bind(this);
    }

    onHover(e){
        e.preventDefault();
        const changeState = !this.state.show_dropdown;
        this.setState({show_dropdown: changeState});

    }
    render() {
        let pins = this.props.propPins;
        let options;
        let firstBoard;
        let noBoards;
        if (this.props.currentUser.boards) {
            options = Object.values(this.props.currentUser.boards).map((board, index) => {
            return(
                <BoardItem 
                board={board}
                pins={pins}
                key={index}
                pin={this.props.pin}
                createAssoc = {this.props.createAssoc}
                />      
            )})
            firstBoard = Object.values(this.props.currentUser.boards)[0];
        } else {
            options = null;
            firstBoard = null;
            noBoards = "all-pin-info-no-boards"
        } 
        return (
                <div className="pin-item" key={this.props.index} onMouseEnter={this.onHover} onMouseLeave={this.onHover} >
                    {this.state.show_dropdown && !this.props.pinSaved ? 
                        <BoardDropdown
                            options= {options}
                            currentUser= {this.props.currentUser}
                            firstBoard={firstBoard}
                            openModal = {this.props.openModal}
                            className="pin-overlay-dropdown"
                            pin = {this.props.pin}
                        />
                        : null
                            }
                    {this.props.pinSaved ? 
                        <Link className="board-link-feed-saved" to={`/board/${this.props.savedBoardId}`}>
                            {this.props.currentUser.boards[this.props.savedBoardId].name}
                        </Link>
                        : null}
                    
                    <Link to={`/pin/${this.props.pin.id}`} >
                        <div className="pin-container" >
                            <img src={this.props.pin.photoUrl} 
                                className="pin-image" 
                            />
                            <p className="title-under-pin">{this.props.pin.title}</p>
                            <div className="pin-owner-info">
                                <div className="small-profile-circle" id="cirle-under-pin">
                                    <p className="small-profile-page-letter" id="letter-under-pin">{this.props.profileLetter}</p>
                                </div>
                                <p className="emailname-under-pin">{this.props.emailName}</p>
                            </div>
                            
                        </div>
                    </Link>
                    
                        
                </div>
        )
    }
}

export default PinItem;