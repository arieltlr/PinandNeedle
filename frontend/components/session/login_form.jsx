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
            <div>
                <h1>Login!</h1>
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <label>Email:
                            <br />
                        <input type="text" onChange={this.handleEmail} />
                    </label>
                    <br />
                    <label>Password:
                            <br />
                        <input type="password" onChange={this.handlePassword} />
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

export default LoginForm;