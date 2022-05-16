import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Auth routes redirect to homepage while Protected routes
// redirect to the login page
const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>amogus</h1>
            </Link>
        </header>
        
        <Modal />
        <Switch>
            <Route exact path="/" component={} />
            <Route exact path="browse" component={} />
            <AuthRoute exact path="signup" component={}/>
            <Route path="/browse/:listingId" component={} />
            <Route path="/users/:userId" component={} />
            {/* <ProtectedRoute path="/reservations" component={} /> */}
        </Switch>
    </div>
)

export default App;