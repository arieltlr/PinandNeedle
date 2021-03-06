import React from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-css'

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
        if (!this.state.fetchPins){
            this.state.fetchPins = true;
            return null;
        }
        let pinArray = Object.values(this.props.pins);
        let pins = pinArray.map((pin, index) => {
            const email = pin.owner_email.split('@')[0]
            const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
            const profileLetter = email[0].toUpperCase();
            return (
                <div className="pin-item">
                    <Link to={`/pin/${pin.id}`} >
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
                    </Link>
                </div>
            )
        })
        pins = pins.reverse(); 
        const breakpointColumnsObj = {
            default: 4,
            1920: 7,
            1366: 5,
            1100: 3,
            700: 2,
            500: 2,
            250: 1,
        };
        return (
            <div className="feed-container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    id="feed-grid">
                    {pins}
                </Masonry>
            </div>
    )
}
}

export default Feed;