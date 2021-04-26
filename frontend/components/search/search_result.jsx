import React from 'react';
import Masonry from 'react-masonry-css';
import BoardPlusDD from '../board_show_dropdown/plus_dropdown';
import PinItemContainer from '../feed/pin_item_container';

class SearchResult extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fetchPins: false
        }
    }
    
    componentDidMount(){
        this.props.getPins();
        this.setState({fetchPins: true})
    }
    render(){

        let pinArray = Object.values(this.props.search);
        let propPins = this.props.pins;
        
        let pins;
        debugger
        if (pinArray.length > 0) {
            
            pins = pinArray.map((pin, index) => {       
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
            }
        
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
            <div className="following-feed">
                {pins ? 
                <div>
                <div className="message-container">
                    <h1 id="following-holder">{`Explore Pins matching ${this.props.history.location.search.split("=")[1]}`}</h1>
                </div> 
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    id="feed-grid">
                    {pins}
                </Masonry>
                <BoardPlusDD openModal={this.props.openModal} boardShow={"feed"}/>
                </div>
                : 
                <div className="message-container">
                    <h1 id="following-holder">{`No pins match ${this.props.history.location.search.split("=")[1]}`}</h1>
                </div> }
            </div>
    )

    }
}

export default SearchResult