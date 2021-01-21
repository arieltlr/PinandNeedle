import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "", 
            username: "",
            country: "",
            language: "",
            gender: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleLanguage = this.handleLanguage.bind(this);
        this.handleGender = this.handleGender.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.signup(user)
            .then(() => this.props.history.push('/'), (error)=> this.props.receiveErrors(error));
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    handleUsername(e) {
        this.setState({ username: e.target.value })
    }
    handleCountry(e) {
        this.setState({ country: e.target.value })
    }
    handleLanguage(e) {
        this.setState({ language: e.target.value })
    }
    handleGender(e) {
        this.setState({ gender: e.target.value })
    }


    render() {
        debugger
        const errors = this.props.errors.map(error => {
            return <li>{error}</li>
        })
        return (
            <div>
                <h1>Create an account</h1>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <label>Email:
                            <br />
                        <input type="text" value={this.props.email} onChange={this.handleEmail} />
                    </label>
                    <br />
                    <label>Username: 
                        <br />
                        <input type="text" value={this.props.username} onChange={this.handleUsername}/>
                    </label>
                    <br/>
                    <label>Gender:
                            <br />
                        <input type="text" onChange={this.handleGender} />
                    </label>
                    <br />
                    <label>Password:
                            <br />
                        <input type="password" onChange={this.handlePassword} />
                    </label>
                    <br/>
                    <label>Country:
                        <br/>
                        <input type="text" value={this.props.country} onChange={this.handleCountry} />
                    </label>
                    <br/>
                    <label>Language:
                        <br/>
                        <input type="text" value={this.props.language} onChange={this.handleLanguage} />
                    </label>
                    <br />
                    <button>Submit</button>
                    <br />
                    <ul>
                        {errors}
                    </ul>
                </form>
            </div>
        )

    }
}

export default SignupForm;