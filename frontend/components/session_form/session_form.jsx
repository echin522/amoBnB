import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginAsDemo = this.loginAsDemo.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal);
    }

    loginAsDemo() {
        this.props.processForm({email: 'demo@email.com', password: 'asdf1234'})
            .then(this.props.closeModal);
    }

    renderErrors() {
        console.log("ERRORS ERRORS", this.props.errors)
        if (this.props.errors.session) {
            return (
                <ul className="session-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={i}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        let nameInfo;
        if (this.props.formType === "signup") {
            nameInfo = (
                <>
                    <input 
                        type="text"
                        value={this.state.fname}
                        onChange={this.update("fname")}
                        placeholder="First Name"
                    />
                    <input 
                        type="text"
                        value={this.state.lname}
                        onChange={this.update("lname")}
                        placeholder="Last Name"
                    />
                </>
            )
        }

        let formInfo;
        formInfo = (
            <>
                { nameInfo }
                <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="login-info"
                    placeholder="Email"
                />
                <input 
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="password-info"
                    placeholder="Password"
                />
            </>
        )

        return (
            <div className="login-form-container">
                <div className="modal-header">
                    <div onClick={this.props.closeModal} className="x">X</div>
                    <p>Log in 
                        or 
                        Sign up</p>
                    <div></div>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form">
                    <h1>AmoBnB</h1>
                    {this.renderErrors()}
                    { formInfo }
                    <button type="submit" className="session-submit">
                        {this.props.formType.charAt(0).toUpperCase() + this.props.formType.slice(1)}
                    </button>
                </form>
                <button onClick={this.loginAsDemo} id="demo-button">
                    Log in as Demo User
                </button>
            </div>
        )
    }
}

export default withRouter(SessionForm);