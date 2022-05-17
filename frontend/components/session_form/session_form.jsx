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
                <div >
                    <div className="modal-header">
                        <div onClick={this.props.closeModal} className="x">X</div>
                        Log in or sign up
                    </div>
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <h1>Welcome to AmoBnB</h1>
                        { formInfo }
                        <button type="submit" className="session-submit">
                            {this.props.formType}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SessionForm);