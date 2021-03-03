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
            description: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleURL = this.handleURL.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount(){
    //     debugger
    //     this.props.getBoards(this.props.board.user_id)
    // }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const pinPic = new FormData();
        pinPic.append('pin[pin_url]', this.state.pin_url);
        pinPic.append('pin[photo]', this.state.photoFile);
        pinPic.append('pin[user_id]', this.props.currentUser.id);
        pinPic.append('pin[board_id]', this.state.board_id);
        pinPic.append('pin[title]', this.state.title);
        pinPic.append('pin[description]', this.state.description)
        debugger
        this.props.createPin(pinPic).then(() => this.props.openModal("pin-save"));
    }
    handleURL(e){
        this.setState({pin_url: e.target.value})
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
    
    render (){
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
        <div className="new-pin-form-container">
            <form className="new-pin-form" onSubmit={this.handleSubmit}>
                <div className="create-pin-header">
                    <div className="create-pin-header-buttons">
                        <div className="three-dots" onClick={() => this.props.openModal("pin-options")}></div>
                        <div className="create-pin-list-save">
                            {select}
                            <button>Save</button>
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
                                        <p id="profile-page-letter-create-pin">{profileLetter}</p>
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
                
                {/* <input type="file" onChange={this.handleFile}/> */}
            {/* <div> */}
                {/* <h1>Image!</h1>
                <p>{this.props.pins.photo}</p>
            {/* </div> */}
            </form>
        </div>
        )

    }
}

export default Pins;