import React from 'react';

class PinShow extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pinFetched: false,
        }
        this.goBack = this.goBack.bind(this);
        
    }
    componentDidMount(){
        this.props.getPin(this.props.match.params.pinId)
    }
    goBack(){
        this.props.history.goBack();
    }

    render (){
        debugger
        if (!this.state.pinFetched){
            this.state.pinFetched = true;
            return null;
        }
        const pin = this.props.pin[this.props.match.params.pinId];
        const board = this.props.board[pin.board_id]
        const user = this.props.user[pin.user_id];
        const email = user.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        const profileLetter = email[0].toUpperCase()
        const options = Object.values(user.boards).map((board, index) => {
            return <option key={index} value={board.id}>{board.name}</option>
        })
        const select = <select name="board_id"
                            id="board-selector"
                            onChange = {this.handleChange}>
                        <option defaultValue={board.id}>{board.name}</option>
                        {options}
                        </select>
        return (
            <div className="pin-show-outer-container">
                <div className="back-arrow" onClick={() => this.goBack()}>
                </div>
                <div className="pin-show-container">
                <div className="pin-show-image-container">
                    <img src={pin.photoUrl} className="pin-show-image"/>
                </div>
                <div className="all-pin-info">
                    <div className="pin-info-buttons">
                        <div className="edit-icon">
                        </div>
                        <div className="create-pin-list-save">
                            {select}
                            <button>Save</button>
                        </div>
                    </div>
                    <div className="pin-show-info">
                        <a className="pin-show-url" href={pin.pin_url}>{pin.pin_url.slice(4)}</a>
                        <a className="pin-show-title"href={pin.pin_url}>{pin.title}</a>
                        {pin.description ? <p className="pin-show-description">{pin.description}</p> : null}
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