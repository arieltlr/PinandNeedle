import React from 'react';

class Feed extends React.Component {
    
    render(){
    return (
        <div>
            <header className="main-nav">
                <div className="left-header">
                    <img id="header-logo" src={window.logo} alt="needle_icon" />
                </div>
                <h1>You Are in the App!</h1>
                <div className="right-header">
                    <button className="red-button" onClick={this.props.logout}>Logout</button>
                </div>

            </header>
        </div>
    )
}
}

export default Feed;