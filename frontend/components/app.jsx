import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import Banner from "./banner/banner_container"
import SignupForm from "./session_form/signup_form_container";
// Auth routes redirect to homepage while Protected routes
// redirect to the login page

const App = () => (
    <div>
        <header>
            <Banner/>
            {/* <Link to="/" className="header-link">
                <h1>amobnb</h1>
            </Link> */}
            <GreetingContainer />
            <i className="fa-solid fa-magnifying-glass"></i>
            {/* <SessionForm /> */}
        </header>
        
        < Modal />

        <Switch>
            <AuthRoute exact path="/signup" component={SignupForm}/>
            {/* <Route exact path="/" component={} />
            <Route exact path="listings" component={} />
            <Route exact path="/listings/:listingId" component={} />
            <Route exact path="/users/:userId" component={} />
            <ProtectedRoute path="/reservations" component={} /> */}
        </Switch>
    </div>
)

export default App;