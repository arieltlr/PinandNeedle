import React from 'react';

class Pins extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pin_url: "",
            photoFile: null, 
            user_id: "",
            board_id: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleURL = this.handleURL.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount(){
    //     this.props.()
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
        // debugger
        this.props.createPin(pinPic);
    }
    handleURL(e){
        this.setState({pin_url: e.target.value})
    }
    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
    }
    
    render (){
        // const email = this.props.email.split('@')[0]
        // const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase()
        // const profileLetter = email[0].toUpperCase()
        const select = <select name="board_id"
                            id="board-selector"
                            onChange = {this.handleChange}>
                        <option defaultValue='Select your answer' hidden disabled > Select your answer </option>
                        
                        <option value='true'>Board 1</option>
                        <option value='false'>Board 2</option>
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
                            <input className="image-upload-input" type="file" onChange={this.handleFile}/>
                        </div>
                        <div className="pin-info-container">
                            <div className="pin-title-owner">
                                <input className="pin-input" id="pin-title" type="text" name="pin_url" onChange={this.handleChange} placeholder="Add your title"/>
                                <div className="create-pin-user-info">
                                    <div id="profile-circle-create-pin">
                                        <p id="profile-page-letter-create-pin">L</p>
                                    </div>
                                    <div className="create-pin-name-followers">
                                        <h1 id="profile-page-username-create-pin">email name</h1>
                                        <h3 className="pin-follower">1 Follower</h3 >
                                    </div>
                                </div>
                                <div className="pin-desc-container">
                                    <input className="pin-input" type="text" name="pin_url" onChange={this.handleChange} placeholder="Tell everyone what your pin is about"/>
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
                <img src={this.props.pins.photoUrl} /> */}
            {/* </div> */}
            </form>
        </div>
        )

    }
}

export default Pins;