import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pinFetched: false,
            pin: {}, 
            board: {}, 
            user: {},
            pin_board_id: "",
            show: false,
            pin_id: "",
            save_board: false,
            saved_board_name: "",
            save_board_id: "",

        }
        this.whenClicked = this.whenClicked.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    componentDidMount(){
        this.props.getPin(this.props.match.params.pinId)
    }
    goBack(){
        this.props.history.goBack();
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({saved_board_name: e.target.dataset.id, save_board_id: e.target.value, save_board: true})
        const assoc = Object.assign({}, {pin_id: this.state.pin.id}, {board_id: e.target.value})
        debugger
        this.props.createAssoc(assoc)
        
    }
     whenClicked(e){
        e.preventDefault()
        const changeState = !this.state.show;
        this.setState({show: changeState})
    }

    render (){
        
        if (!this.state.pinFetched){
            this.state.pinFetched = true;
            return null;
        }
        this.state.pin = this.props.pin[this.props.match.params.pinId];
        this.state.user = this.props.user[this.state.pin.user_id];
        const usersPin = Boolean(this.props.currentUser.id === this.state.user.id)
        const email = this.state.pin.owner_email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        const profileLetter = email[0].toUpperCase()
        const options = Object.values(this.props.currentUser.boards).map((board, index) => {
            return 
                    <li className="board-name" key={index} value={board.id} data-id={board.name}
                    onClick={this.handleSubmit}>{board.name}</li>
        })
        const firstBoard = Object.values(this.props.currentUser.boards)[0]

        return (
            <div className="pin-show-outer-container">
                <div className="back-arrow" onClick={() => this.goBack()}>
                </div>
                <div className="pin-show-container">
                <div className="pin-show-image-container">
                    <img src={this.state.pin.photoUrl} className="pin-show-image"/>
                </div>
                <div className="all-pin-info">
                    <div className="pin-info-buttons">
                        <div>
                            { usersPin ? <div className="edit-icon"></div> : null }      
                        </div>
                        { this.state.save_board ? 
                        <Link to={`/board/${this.state.save_board_id}`}>
                        Saved to {this.state.saved_board_name}!
                        </Link>
                        : 
                            <div className="drop-down-container">
                                <div id="down-icon-circle-board" className="create-pin-list-save" onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>{firstBoard.name}
                                    {this.state.show ? 
                                    <ul className="board-dropdown">
                                        {options} 
                                        <div className="add-board-button-container">
                                            <div className="add-board-icon"></div>
                                            <div className="create-new-board" onClick={() => this.props.openModal('createBoard')}>Create Board</div>
                                        </div>
                                    </ul>
                
                                    : 
                                    null}
                                </div>
                                <button value={firstBoard.id} data-id={firstBoard.name} className="pin-save-button" onClick={this.handleSubmit}>Save</button>
                            </div>
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
            
        )

    }
}

export default PinShow;