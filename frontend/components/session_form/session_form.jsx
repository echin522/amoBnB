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
        if (this.props.errors.responseText) {
            return (
                <ul className="session-errors">
                    {this.props.errors.responseText}
                </ul>
            );
        }
    }

    render() {
        let nameInfo;
        let otherFormText = "Sign up instead";

        if (this.props.formType === "signup") {
            otherFormText = "Log in instead"
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
            <div id="form-info">
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
            </div>
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
                <form className="login-form">
                    <h1>Welcome to AmoBnB</h1>
                    {this.renderErrors()}
                    { formInfo }
                    <button onClick={this.handleSubmit} type="submit" className="session-submit">
                        {this.props.formType.charAt(0).toUpperCase() + this.props.formType.slice(1)}
                    </button>
                    <div onClick={this.loginAsDemo} id="demo-button">
                        Log in as Demo User
                    </div>
                </form>
                <p id="other-form" onClick={() => this.props.openModal(this.props.otherForm)}>{otherFormText}</p>
            </div>
        )
    }
}

export default withRouter(SessionForm);