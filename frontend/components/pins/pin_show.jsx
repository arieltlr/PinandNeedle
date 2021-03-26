import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '../board_list_dropdown/board_item';

class PinShow extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pinFetched: false,
            pin: this.props.allPins[this.props.match.params.pinId],
            pins: this.props.allPins, 
            board: {}, 
            pinOwner: this.props.pinOwner[this.state.pin.user_id],
            pin_board_id: "",
            show: false,
            pin_id: "",
            saved_board_name: "",
            save_board_id: "",

        }
        this.whenClicked = this.whenClicked.bind(this);
        this.goBack = this.goBack.bind(this);
        this.closeWhenClicked = this.closeWhenClicked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.findBoard = this.findBoard.bind(this);
        this.handleEdit = this.handleEdit.bind(this);


        
    }
    componentDidMount(){
        this.props.getPins()
    }
    goBack(){
        this.props.history.goBack();
    }

     whenClicked(e){
        e.preventDefault()
        const changeState = !this.state.show;
        this.setState({show: changeState})
    }
     closeWhenClicked(e){
        e.preventDefault()
        if (this.state.show){
            const changeState = !this.state.show;
            this.setState({show: changeState});
        }   
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({saved_board_name: e.target.dataset.id, save_board_id: e.target.value, save_board: true})
        if (!this.props.currentUser.boards){
            const assoc = {
                'boardPin[pin_id]': this.state.pin.id, 
                'boardPin[board_id]': e.target.value,
                'newBoard[user_id]': this.props.currentUser.id,
                'newBoard[owner_email]': this.props.currentUser.email}
            this.props.createAssoc(assoc)
        } else {
            const assoc = {
            'pin_id': this.state.pin.id, 
            'board_id': e.target.value
            }
            debugger
            this.props.createAssoc(assoc)
        }

        
    }
    findBoard(pin, user){
        let pinsBoard = false;
        const pinId = pin.id;
        const pinIdArray = Object.values(user.boards).map(board => {
            return Object.assign({}, {[board.id]: board.pins})
            })
        for (let i = 0; i < pinIdArray.length; i++){
            if (Object.values(pinIdArray[i])[0].includes(pinId)){
                pinsBoard = true;
            }
        }
        return pinsBoard;
    }
    handleEdit(e){
        e.preventDefault();
        let pinsBoard;
        if (this.props.currentUser.boards.length > 0){
            pinsBoard = this.findBoard(this.state.pin, this.props.currentUser);
        } else {
            pinsBoard = undefined;
        }
        if (pinsBoard && this.state.pinOwner.id === this.props.currentUser.id){
            this.props.openModal("edit-pin")
        } else {
            this.props.openModal("edit-pinsBoard")
        }
        
    }

    render (){
        
        if (!this.state.pinFetched){
            this.state.pinFetched = true;
            return null;
        }
        // this.state.pin = this.props.pin[this.props.match.params.pinId];
        // this.state.pinOwner = this.props.pinOwner[this.state.pin.user_id];
        const usersPin = Boolean(this.props.currentUser.id === this.state.pinOwner.id)
        const email = this.state.pin.owner_email.split('@')[0];
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
        const profileLetter = email[0].toUpperCase();
        let pinsBoard;
        if (this.props.currentUser.boards){
            pinsBoard = this.findBoard(this.state.pin, this.props.currentUser);
        }
  
        let pins = Object.assign({}, this.props.currentUser.pins, this.props.pin);
        let options;
        let firstBoard;
        let noBoards;
        if (this.props.currentUser.boards) {
            options = Object.values(this.props.currentUser.boards).map((board, index) => {
            return(
                <BoardItem 
                board={board}
                pins={pins}
                index={index}
                pin={this.state.pin}
                createAssoc={this.props.createAssoc}
                />      
            )})
            firstBoard = Object.values(this.props.currentUser.boards)[0];
        } else {
            options = null;
            firstBoard = null;
            noBoards = "all-pin-info-no-boards"
        }
        let showEditIcon;
        if ( usersPin || pinsBoard) {
            showEditIcon =  <div className="edit-icon" onClick={this.handleEdit}></div>
        } else{
            showEditIcon = null;
        }
        debugger
        return (
            <div className="whole-page-background" onClick={this.closeWhenClicked}>
                <div className="pin-show-outer-container" >
                    <div className="back-arrow" onClick={() => this.goBack()}>
                    </div>
                    <div className="pin-show-container">
                    <div className="pin-show-image-container">
                        <img src={this.state.pin.photoUrl} className="pin-show-image"/>
                    </div>
                    <div className="all-pin-info" id={noBoards}>
                        <div className="pin-info-buttons">
                            <div>
                                { showEditIcon }      
                            </div>
                                {firstBoard ? 
                                    <div className="drop-down-container">
                                        { this.props.pinSaved.savedPin ? 
                                        <Link className="board-link" to={`/board/${this.props.pinSaved.board_id}`}>
                                            Saved to {this.props.currentUser.boards[this.props.pinSaved.board_id].name}!
                                        </Link>
                                        : 
                                        <div id="down-icon-circle-board" className="create-pin-list-save" 
                                            onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                                            {firstBoard.name}
                                                {this.state.show ? 
                                                <ul className="board-dropdown">
                                                    {options} 
                                                    <div className="add-board-button-container">
                                                        <div className="add-board-icon" onClick={() => this.props.openModal('createBoard')}></div>
                                                        <div className="create-new-board">Create Board</div>
                                                    </div>
                                                </ul>
                                            : null}
                                            
                                        </div>}
                                    { this.props.pinSaved.savedPin ? null : 
                                        <button value={firstBoard.id} data-id={firstBoard.name} 
                                            className="pin-save-button" onClick={this.handleSubmit}>
                                        Save</button>
                                    }
                                    
                                </div> 
                                :
                                <button className="pin-save-button" id="no-board" onClick={this.handleSubmit}>Save</button>
                                }
                            
                        </div>
                        <div className="pin-show-info">
                            <a className="pin-show-url" rel={'external'} href={`https://${this.state.pin.pin_url}`} target="_blank">{this.state.pin.pin_url.slice(4)}</a>
                            <a className="pin-show-title" rel={'external'} href={`https://${this.state.pin.pin_url}`}>{this.state.pin.title}</a>
                            {this.state.pin.description ? <p className="pin-show-description">{this.state.pin.description}</p> : null}
                        </div>
                        <div className="create-pin-user-info">
                            <div id="profile-circle-create-pin">
                                <p className="profile-page-letter-create-pin" id="pin-show-letter">{profileLetter}</p>
                            </div>
                            <div className="create-pin-name-followers">
                                <h1 id="profile-page-username-create-pin" id="pin-show-username">{emailName}</h1>
                                <h3 className="pin-follower">1 Follower</h3 >
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        )

    }
}

export default PinShow;