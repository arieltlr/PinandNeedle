import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '../board_list_dropdown/board_item';

class PinShow extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pinFetched: false,
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
        this.handleLink = this.handleLink.bind(this);
        
    }
    handleLink(e){
        let url;
        if (this.props.pin.pin_url.includes('http')){
            window.open(`${this.props.pin.pin_url}`)
        } else {
            window.open(`https://${this.props.pin.pin_url}`)
        }
        
    }
    componentDidMount(){
        this.props.getPin(this.props.match.params.pinId)
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
                'boardPin[pin_id]': this.props.pin.id, 
                'boardPin[board_id]': e.target.value,
                'newBoard[user_id]': this.props.currentUser.id,
                'newBoard[owner_email]': this.props.currentUser.email}
            this.props.createAssoc(assoc)
        } else {
                const assoc = {
                    'boardPin[board_id]': e.target.value, 
                    'boardPin[pin_id]': this.props.pin.id 
                }
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
        if (this.props.currentUser.boards){
            pinsBoard = this.findBoard(this.props.pin, this.props.currentUser);
        } else {
            pinsBoard = undefined;
        }
        if (pinsBoard && this.props.pinOwner.id === this.props.currentUser.id){
            
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
        const usersPin = Boolean(this.props.currentUser.id === this.props.pinOwner.id)
        const email = this.props.pin.owner_email.split('@')[0];
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
        const profileLetter = email[0].toUpperCase();
        let pinsBoard;
        if (this.props.currentUser.boards){
            pinsBoard = this.findBoard(this.props.pin, this.props.currentUser);
        }
        let pins = this.props.allPins;
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
        let displayURL;
        if (this.props.pin.pin_url.includes('www.')){
            displayURL = this.props.pin.pin_url.split('www.')[1];
            displayURL = displayURL.split('.com')[0]
            displayURL = displayURL + '.com'
        } else if (this.props.pin.pin_url.includes('https://')){
            displayURL = this.props.pin.pin_url.split('https://')[1];
            displayURL = displayURL.split('.com')[0]
            displayURL = displayURL + '.com'
        }
        
        return (
            <div className="whole-page-background" onClick={this.closeWhenClicked}>
                <div className="pin-show-outer-container" >
                    <div className="back-arrow" onClick={() => this.goBack()}>
                    </div>
                    <div className="pin-show-container">
                    <div className="pin-show-image-container">
                        <img src={this.props.pin.photoUrl} className="pin-show-image"/>
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
                                                    <div className="add-board-button-container" onClick={() => this.props.openModal('createBoard')}>
                                                        <div className="add-board-icon"></div>
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
                            <a className="pin-show-url"  onClick={this.handleLink}>{displayURL}</a>
                            <a className="pin-show-title" onClick={this.handleLink}>{this.props.pin.title}</a>
                            {this.props.pin.description ? <p className="pin-show-description">{this.props.pin.description}</p> : null}
                        </div>
                        <div className="create-pin-user-info">
                            <div id="profile-circle-create-pin">
                                <p className="profile-page-letter-create-pin" id="pin-show-letter">{profileLetter}</p>
                            </div>
                            <div className="create-pin-name-followers">
                                <Link id="username-link" to={`/user/${this.props.pinOwner.id}`}>
                                    <h1 id="profile-page-username-create-pin" id="pin-show-username">{emailName}</h1>
                                </Link>
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