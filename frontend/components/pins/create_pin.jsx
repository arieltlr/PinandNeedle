import React from 'react';
import { openModal } from '../../actions/modal_actions';

class Pins extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            title: "",
            pin_url: "",
            photoFile: null,
            photoUrl: null, 
            user_id: this.props.board.user_id,
            board_id: this.props.board.id,
            board_name: this.props.board.name,
            description: "",
            owner_email: this.props.currentUser.email,
            show: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeWhenClicked = this.closeWhenClicked.bind(this);
        this.whenClicked = this.whenClicked.bind(this);
        this.handleName = this.handleName.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        debugger
        this.setState({
            [name]: value
        })
    }
    handleName(e){
        debugger
        this.setState({
            board_name: e.target.dataset.id, board_id: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const pinPic = new FormData();
        pinPic.append('pin[pin_url]', this.state.pin_url);
        pinPic.append('pin[photo]', this.state.photoFile);
        pinPic.append('pin[user_id]', this.props.currentUser.id);
        pinPic.append('board_id', this.state.board_id);
        pinPic.append('pin[title]', this.state.title);
        pinPic.append('pin[description]', this.state.description);
        pinPic.append('pin[owner_email]', this.state.owner_email);
        debugger
        this.props.createPin(pinPic).then(() => this.props.openModal("pin-save"));
    }
    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if (file){
            fileReader.readAsDataURL(file);
        }
        
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

    render (){
        const email = this.props.currentUser.email.split('@')[0]
        const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        const profileLetter = email[0].toUpperCase()
        let pins = this.props.currentUser.pins;
        debugger
        const options = Object.values(this.props.currentUser.boards).map((board, index) => {
            debugger
            return(
                <div className="boards-dropdown-li-container" value={board.id} data-id={board.name} onClick={this.handleName} key={index}>
                    <div className="boards-dropdown-board">
                        { board.pins[0] ? <img  className="dropdown-board-cover" src={pins[board.pins[0]].photoUrl} alt="board-cover-image"/>
                         : <div className="dropdown-board-cover"></div> }
                        <li className="board-name" value={board.id} data-id={board.name}>
                            {board.name}</li>
                    </div>
                </div>)
        })
        const firstBoard = Object.values(this.props.currentUser.boards)[0]
        return (
            <div className="new-pin-form-container">
            <form className="new-pin-form" onSubmit={this.handleSubmit}>
                <div className="create-pin-header">
                    <div className="create-pin-header-buttons">
                        <div className="three-dots" onClick={() => this.props.openModal("pin-options")}></div>
                        <div className="drop-down-container">
                                    <div id="down-icon-circle-board" className="create-pin-list-save" onClick={this.whenClicked} onFocus={this.whenClicked} onBlur={this.whenClicked}>{this.state.board_name}
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
                                    <button className="pin-save-button" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
                <div className="pin-container-width">
                    <div className="pin-content-container">
                            <div className="image-input-container">
                                {this.state.photoUrl ? <img id="pin-preview" src={this.state.photoUrl}/> :<input className="image-upload-input" type="file" onChange={this.handleFile}/>} 
                            </div>
                            
                        <div className="pin-info-container">
                            <div className="pin-title-owner">
                                <input className="pin-input" id="pin-title" type="text" name="title" onChange={this.handleChange} placeholder="Add your title"/>
                                <div className="create-pin-user-info">
                                    <div id="profile-circle-create-pin">
                                        <p className="profile-page-letter-create-pin">{profileLetter}</p>
                                    </div>
                                    <div className="create-pin-name-followers">
                                        <h1 id="profile-page-username-create-pin">{emailName}</h1>
                                        <h3 className="pin-follower">1 Follower</h3 >
                                    </div>
                                </div>
                                <div className="pin-desc-container">
                                    <input className="pin-input" type="text" name="description" onChange={this.handleChange} placeholder="Tell everyone what your pin is about"/>
                                </div>
                            </div>
                            <div className="pin-url-container">
                                <input className="pin-input" type="text" name="pin_url" onChange={this.handleChange} placeholder="Add a destination link"/>
                            </div>
                        </div>
                </div>
                </div>
            </form>
        </div>
        )

    }
}

export default Pins;