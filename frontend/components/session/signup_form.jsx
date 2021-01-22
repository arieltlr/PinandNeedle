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
        this.handleAge = this.handleAge.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
            .then(() => this.props.history.push('/'), (error)=> this.props.receiveErrors(error));
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


    render() {
        const errors = this.props.errors.map(error => {
            return <li>{error}</li>
        })
        debugger
        return (

            <div className="modal">
                <img className="exit-image" src={window.x} />
                <section className="header">
                    <img className="header-logo" src={window.logo} alt="needle-logo"/>
                    <h1 className="welcome">Welcome to Pin and Needle</h1>
                    <h3 className="subtext">Find new ideas to try</h3>
                </section>
                
                <form className="signup-form" onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Email" value={this.props.email} onChange={this.handleEmail} />
                    <br/>
                    <input type="password" placeholder="Create a password" onChange={this.handlePassword} />
                    <br />
                    <input type="text" placeholder="Age" value={this.props.age} onChange={this.handleAge}/>
                    <br />
                    <button className="red-button">Continue</button>
                    <br />
                    <ul>
                        {errors}
                    </ul>
                </form>
                {this.props.otherForm}
            </div>
        )

    }
}

export default SignupForm;