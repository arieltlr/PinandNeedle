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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.login(user)
            .then(() => this.props.history.push('/'));
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    render() {
        debugger
        const errors = this.props.errors.map(error => {
            return <li>{error}</li>
        })
        return (
            <div className="modal">
                <img className="exit-image" src={window.x} />
                <section className="header">
                    <img className="header-logo" src={window.logo} alt="needle-logo" />
                    <h1 className="welcome">Welcome to Pin and Needle</h1>
                </section>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Email" value={this.props.email} onChange={this.handleEmail} />
                    <br />
                    <input type="password" placeholder="Password" onChange={this.handlePassword} />
                    <br />
                    <button className="red-button">Log in</button>
                    {this.props.otherForm}
                    <ul>
                        {errors}
                    </ul>
                </form>
                
            </div>
        )

    }
}

export default LoginForm;