import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }
    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: 'demouser@email.com', password: "password123" }
        this.props.login(demoUser)
            .then(() => this.props.closeModal());
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() => this.props.closeModal());
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    componentWillUnmount(){
        const resetErrors = [];
        this.props.refreshErrors(resetErrors);
    }

    render() {
        const errorMessages = this.props.errors;
        return (
            <div className="modal">
                <div className="exit-container">
                    <div className="exit-image" onClick={this.props.closeModal} ></div>
                </div>
                <section className="header">
                    <img className="header-logo" src={window.logo} alt="needle-logo" />
                    <h1 className="welcome">Welcome to Pin and Needle</h1>
                </section>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" value={this.props.email} onChange={this.handleEmail} />
                    <br />
                    <input type="password" placeholder="Password" onChange={this.handlePassword} />
                    {errorMessages.length > 0 ? <p className="error-message" >{errorMessages[0]}</p> : null}
                    <br />
                    <button className="red-button">Log in</button>
                    <button className="blue-button" onClick={this.handleDemoUser}>Continue as Demo User</button>
                    {this.props.otherForm}
                </form>
                
            </div>
        )

    }
}

export default LoginForm;