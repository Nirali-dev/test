import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ContactUs from "../components/contactUs";
import Home from "../home.js";
export default class Routers extends React.Component {
    render() {
        return (
            <Router>
                <div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/contactUs">Contact us</Link>
                      </li>
                    </ul>
                  </nav>
                  <Switch>
                    <Route path="/contactUs">
                      <ContactUs />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
            </Router>
        );
    }
}