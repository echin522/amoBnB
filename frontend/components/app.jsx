import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./session_modal/session_modal";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import Banner from "./banner/banner_container"
import SignupForm from "./session_form/signup_form_container";
import LoginForm from "./session_form/login_form_container";
import ListingForm from "./listing_form/listing_form_container"
// Auth routes redirect to homepage while Protected routes
// redirect to the login page

const App = () => (
    <>    
        <header>
            <Route path={"/"} component={Banner} />
        </header>
        
        < Modal />

        <Switch>
            {/* <Route exact path="/" component={Listings} /> */}
            <AuthRoute exact path="/signup" component={SignupForm}/>
            <AuthRoute exact path="/signin" component={LoginForm}/>
            <Route exact path="/listings/new" component={ListingForm} />
            {/* <Route exact path="listings" component={} /> */}
            {/* <Route exact path="/listings/:listingId" component={} /> */}
            {/* <Route exact path="/users/:userId" component={} /> */}
            {/* <ProtectedRoute path="/reservations" component={} /> */}
        </Switch>
    </>
)

export default App;