import React from 'react';
import Masonry from 'react-masonry-css';
import BoardPlusDD from '../board_show_dropdown/plus_dropdown';
import PinItemContainer from './pin_item_container';


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
        let propPins = this.props.pins;
        let currentUser= this.props.user;
        let pins = pinArray.map((pin, index) => {
            const email = pin.owner_email.split('@')[0]
            const emailName = email[0].toUpperCase() + email.slice(1).toLowerCase();
            const profileLetter = email[0].toUpperCase();
            return (
                <PinItemContainer
                key={index}
                pin={pin}
                profileLetter={profileLetter}
                emailName={emailName}
                propPins={propPins}
                />
                
            )
        })
        pins = pins.reverse(); 
        const breakpointColumnsObj = {
            default: 5,
            1920: 7,
            1300: 5,
            1200: 4,
            1100: 3,
            700: 2,
            500: 2,
            450: 1,
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
                <BoardPlusDD openModal={this.props.openModal} boardShow={"feed"}/>
            </div>
    )
}
}

export default Feed;