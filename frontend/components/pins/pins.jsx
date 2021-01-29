import React from 'react';

class Pins extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pin_url: "",
            photoFile: null
        }
        this.handleURL = this.handleURL.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount(){
    //     this.props.getPins()
    // }
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
        // debugger
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleURL}/>
                <input type="file" onChange={this.handleFile}/>
            <button>Pin it!</button>
            <div>
                <h1>Image!</h1>
                <p>{this.props.pins.photo}</p>
                <img src={this.props.pins.photoUrl} />
            </div>
            </form>
        </div>
        )

    }
}

export default Pins;