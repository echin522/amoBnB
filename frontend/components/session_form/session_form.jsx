import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        // return (
        //     <ul>
        //         {this.props.errors.map((error, i) => (
        //             <li key={i}>
        //                 {error}
        //             </li>
        //         ))}
        //     </ul>
        // );
    }

    render() {
        let nameInfo;
        if (this.props.formType === "sign up") {
            nameInfo = (
                <>
                    <input 
                        type="text"
                        value={this.state.first_name}
                        onChange={this.update("first_name")}
                        placeholder="First Name"
                    />
                    <input 
                        type="text"
                        value={this.state.last_name}
                        onChange={this.update("last_name")}
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
                <form onSubmit={this.handleSubmit} className>
                    <div className="modal-header">
                        <div onClick={this.props.closeModal} className="x">X</div>
                        Log in or sign up
                    </div>
                    {this.renderErrors()}
                    <form className="login-form">
                        <h1>Welcome to Amogus</h1>
                        { formInfo }
                        <input type="submit" className="session-submit">
                            {this.props.formType}
                        </input>
                    </form>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);