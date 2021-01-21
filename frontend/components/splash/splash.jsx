import React from 'react';
// import logo from '../../../app/assets/images';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render (){
        debugger
        return (
            <div>
                <header className="main-nav">
                    <div className="left-header">
                        <img id="header-logo" src={window.logo} alt="needle_icon"/>
                        <h1 className="app-name">Pin and Needle</h1>
                    </div>
                    <div className="right-header">
                        <button className="login" onClick={()=>this.props.login}>Log in</button>
                        <button className="signup" onClick={() => this.props.signup}>Sign up</button>
                    </div>
                </header>
                <section className="main-text">
                    <h1 className="first-header">Get your next</h1>
                    <h1 className="second-header">project idea</h1>
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