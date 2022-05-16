import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import SearchBar from "./search_bar/search_bar_container";
import SessionForm from "./session_form/session_form";
// Auth routes redirect to homepage while Protected routes
// redirect to the login page
const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>amogus</h1>
            </Link>
            <GreetingContainer />
            {/* <SessionForm /> */}
        </header>
        
        <Switch>
            {/* <Route exact path="/" component={} />
            <Route exact path="listings" component={} />
            <AuthRoute exact path="signup" component={}/>
            <Route exact path="/listings/:listingId" component={} />
            <Route exact path="/users/:userId" component={} />
            <ProtectedRoute path="/reservations" component={} /> */}
        </Switch>
    </div>
)

export default App;