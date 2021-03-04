import React from 'react';

class Feed extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fetchPins: false
        }
    }
    
    componentDidMount(){
        this.props.getPins();
    }
    render(){
        debugger
        if (!this.state.fetchPins){
            this.state.fetchPins = true;
            return null;
        }
        let pinArray = Object.values(this.props.pins);
        let pins = pinArray.map((pin, index) => {
            const email = pin.user.email.split('@')[0]
            const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
            const profileLetter = email[0].toUpperCase();
            return (
                    <div className="pin-container" key={index}>
                        <img src={pin.photoUrl} 
                            className="pin-image" 
                        />
                        <p className="title-under-pin">{pin.title}</p>
                        <div className="pin-owner-info">
                            <div className="small-profile-circle" id="cirle-under-pin">
                                <p className="small-profile-page-letter" id="letter-under-pin">{profileLetter}</p>
                            </div>
                            <p className="emailname-under-pin">{emailName}</p>
                        </div>
                        
                    </div>
            )
        })
        
        return (
        <div className="feed-container">
            <div className="master-pin-container">
                {pins}
            </div>
        </div>
    )
}
}

export default Feed;