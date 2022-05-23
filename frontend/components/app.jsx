import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "./session_modal/session_modal";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Banner from "./banner/banner_container";
import ListingShow from "./listing/listing_show/listing_show_container";
import ListingForm from "./listing/listing_form/listing_form_container";
import ListingIndex from "./listing/listing_index/listing_index_container";
// Auth routes redirect to homepage while Protected routes
// redirect to the login page

const App = () => (
    <>    
        <header>
            <Route path={"/"} component={Banner} />
        </header>
        < Modal />
        
        <Switch>
            <Route exact path="/" component={ListingIndex} />
            <Route exact path="/browse/:filter" component={ListingIndex} />
            {/* <Route exact path="listings" component={} /> */}
            <Route exact path="/listings/new" component={ListingForm} />
            <Route exact path="/listings/:listingId" component={ListingShow} />
            {/* <Route exact path="/users/:userId" component={} /> */}
            {/* <ProtectedRoute path="/reservations" component={} /> */}
        </Switch>
    </>
)

export default App;