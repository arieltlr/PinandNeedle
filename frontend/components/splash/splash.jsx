import React from 'react';
// import logo from '../../../app/assets/images';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
       if (this.props.currentUser){
           return (
           <div>
               <header className="main-nav">
                   <div className="left-header">
                       <img id="header-logo" src={window.logo} alt="needle_icon" />
                   </div>
                   <div className="right-header">
                       <button className="red-button" onClick={this.props.logout}>Logout</button>
                   </div>

               </header>
           </div>
           )
        }
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
                <section className="images"> 
                    <img className="side-image1" src={window.craft_table1} alt="estee-janssen" />
                    <img className="mid-image" src={window.spools} alt="annie spratt"/>
                    <img className="mid-image" src={window.brown_sweater} alt="brown knit sweater" />
                    <img className="mid-image" src={window.embroidery_thread} alt="thread" />
                    <img className="mid-image" src={window.pin_cushion} alt="pins" />
                    <img className="mid-image" src={window.textiles} alt="toa heftiba" />
                    <img className="side-image2" src={window.craft_table2} alt="estee-janssen" />

                    {/* <img className="7" src={window.serger_spool} alt="serger spools" /> */}
                </section>
           
            </div>
        )
        // debugger
        // if (this.props.currentUser){
        //     debugger
        //     return (
        //         <div>
        //             <h1>Welcome back , {this.props.currentUser.username}</h1>
        //             <button onClick={() => this.props.logout()}>Logout</button>
        //         </div>
        //     )
        // }else { // }
       
    }
}

export default Splash;