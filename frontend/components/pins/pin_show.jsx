import React from 'react';

class PinShow extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pinFetched: false,
            pin: {}, 
            board: {}, 
            user: {},
            show: false,
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
        const pinPic = new FormData();
        pinPic.append('pin[pin_url]', this.state.pin.pin_url);
        pinPic.append('pin[photo]', this.state.pin.photoFile);
        pinPic.append('pin[user_id]', this.props.currentUser.id);
        pinPic.append('pin[board_id]', this.state.pin.board_id);
        pinPic.append('pin[title]', this.state.pin.title);
        pinPic.append('pin[description]', this.state.pin.description)
        debugger
        this.props.createPin(pinPic).then(() => this.props.openModal("pin-save"));
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
        this.state.board = this.props.board[this.state.pin.board_id]
        this.state.user = this.props.user[this.state.pin.user_id];
        const usersPin = Boolean(this.props.currentUser.id === this.state.user.id)
        const email = this.state.user.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        const profileLetter = email[0].toUpperCase()
        debugger
        const options = Object.values(this.state.user.boards).map((board, index) => {
            return <li key={index} value={board.id}>{board.name}</li>
        })
        // const select = <select name="board_id"
        //                     id="board-selector"
        //                     onChange = {this.handleChange}>
        //                 <option defaultValue={board.id}>{board.name}</option>
        //                 {options}
        //                 </select>
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
                        <div className="create-pin-list-save">
                            <div onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>
                                {this.state.show ? 
                                <ul>
                                    {options}
                                </ul>
                                : 
                                null}
                                <div className="board-list-dropdown" value={this.state.board.id}>{this.state.board.name}</div>
                            </div>
                            <button className="pin-save-button" onClick={this.handleSubmit}>Save</button>
                        </div>
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