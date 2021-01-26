import React from 'react';
import { Route } from 'react-router-dom';
import FeedContainer from '../feed/feed_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
// import logo from '../../../app/assets/images';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        return (
            <div>
                <header className="main-nav">
                    <div className="left-header">
                        <img id="header-logo" src={window.logo} alt="needle_icon"/>
                        <h1 className="app-name">Pin and Needle</h1>
                    </div>
                    <div className="right-header">
                        <button className="login-button" onClick={() =>this.props.openModal('login')}>Log in</button>
                        <button className="signup-button" onClick={() => this.props.openModal('signup')}>Sign up</button>
                    </div>
                </header>
                <section className="main-text">
                    <h1 className="first-header">Get your next</h1>
                    <h1 className="second-header">project idea</h1>
                </section>
                <div className="splash-row-container">
                    <section className="images"> 
                        <img className="side-image1" src={window.craft_table1} alt="estee-janssen" />
                        <img className="mid-image" id="mid1" src={window.spools} alt="annie spratt"/>
                        <img className="mid-image" id="mid2"src={window.brown_sweater} alt="brown knit sweater" />
                        <img className="mid-image" id="mid3" src={window.embroidery_thread} alt="thread" />
                        <img className="mid-image" id="mid4" src={window.pin_cushion} alt="pins" />
                        <img className="mid-image" id="mid5" src={window.textiles} alt="toa heftiba" />
                        <img className="side-image2" src={window.craft_table2} alt="estee-janssen" />
                    </section>
                    <section className="images">
                        <img className="second-row-side-image1" src={window.craft_table1} alt="estee-janssen" />
                        <img className="mid-image" id="second-row-mid1" src={window.pin1} alt="annie spratt" />
                        <img className="mid-image" id="second-row-mid2" src={window.pin2} alt="brown knit sweater" />
                        <img className="mid-image" id="second-row-mid3" src={window.pin3} alt="thread" />
                        <img className="mid-image" id="second-row-mid4" src={window.pin4} alt="pins" />
                        <img className="mid-image" id="second-row-mid5" src={window.pin5} alt="toa heftiba" />
                        <img className="second-row-side-image2" src={window.craft_table2} alt="estee-janssen" />
                    </section>
                </div>
            </div>
        )
    }
}

export default Splash;