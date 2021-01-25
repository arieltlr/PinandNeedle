import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "", 
           age: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }
    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: 'demouser@email.com', password: "password123" }
        this.props.login(demoUser)
            .then(() => this.props.closeModal())
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // debugger
        this.props.signup(user)
            .then(() => this.props.closeModal());
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    handleAge(e) {
        this.setState({ age: e.target.value })
    }
    componentWillUnmount() {
        // debugger
        const resetErrors = [];
        this.props.refreshErrors(resetErrors);
    }
    render() {
        // debugger
        const errorMessages = this.props.errors.map((error, index) => {
            return <li className="error-li" id={index}>{error}</li>
        })
        // debugger
        return (

            <div className="modal">
                <div className="exit-container">
                    <img className="exit-image" src={window.x} onClick={this.props.closeModal}/>
                </div>
                <section className="header">
                    <img className="header-logo" src={window.logo} alt="needle-logo"/>
                    <h1 className="welcome">Welcome to Pin and Needle</h1>
                    <h3 className="subtext">Find new ideas to try</h3>
                </section>
                
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" value={this.props.email} onChange={this.handleEmail} />
                    { errorMessages ? <p className="error-message" id="email-error">{errorMessages[0]}</p> : null }
                    <br/>
                    <input type="password" placeholder="Create a password" onChange={this.handlePassword} />
                    {errorMessages.length > 0 ? <p className="error-message" id="email-error">{errorMessages[1]}</p> : <p></p>}
                    <br />
                    <input type="text" placeholder="Age" value={this.props.age} onChange={this.handleAge}/>
                    {errorMessages.length > 1 ? <p className="error-message" id="email-error">{errorMessages[2]}</p> : <p></p>}
                    <br />
                    <button className="red-button">Continue</button>
                    <button className="blue-button" onClick={this.handleDemoUser}>Continue as Demo User</button>
                    {this.props.otherForm}
                    <br />
                </form>
            </div>
        )

    }
}

export default SignupForm;