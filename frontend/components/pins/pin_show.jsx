import React from 'react';

class PinShow extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            title: this.props.pin.title,
            pin_url: this.props.pin.pin_url,
            photoUrl: this.props.pin.photoUrl, 
            board_id: this.props.board.id,
            description: this.props.pin.description,
            getPin: false,
        }
        
    }
    componentDidMount(){
        debugger
        this.props.getPin(this.props.match.params.pinId)
    }

    render (){
        debugger
        if (!this.state.getPin){
            this.state.getPin = true;
            return null;
        }
        debugger
        const email = this.props.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        const profileLetter = email[0].toUpperCase()
        const options = Object.values(this.props.userBoards).map((board, index) => {
            return <option key={index} value={board.id}>{board.name}</option>
        })
        const select = <select name="board_id"
                            id="board-selector"
                            onChange = {this.handleChange}>
                        <option defaultValue={this.props.board.id}>{this.props.board.name}</option>
                        {options}
                        </select>
        return (
            <div>
                <div>
                    <div className="create-pin-list-save">
                        {select}
                        <button>Save</button>
                    </div>
                    <div>
                        <a href={this.state.pin_url}>{this.state.pin_url}</a>
                        <a href={this.state.pin_url}>{this.state.title}</a>
                        {this.state.description ? <p>{this.state.description}</p> : null}
                    </div>
                    <div className="create-pin-user-info">
                        <div id="profile-circle-create-pin">
                            <p id="profile-page-letter-create-pin">{profileLetter}</p>
                        </div>
                        <div className="create-pin-name-followers">
                            <h1 id="profile-page-username-create-pin">{emailName}</h1>
                            <h3 className="pin-follower">1 Follower</h3 >
                        </div>
                    </div>
                </div>
                <div>
                    <img src={this.props.pin.photoUrl}/>
                </div>
            </div>
        )

    }
}

export default PinShow;