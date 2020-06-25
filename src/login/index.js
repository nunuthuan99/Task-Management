import React from "react";
import { LoginPage } from "./login.page";
import  Homepage  from "../homepage/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function Login() {
    return (
        <BrowserRouter>
            <div className="Login">
                <Switch>
                    <Route exact path="/homepage" component={ Homepage } />
                    <Route exact path="/" component={ LoginPage } />
                    <Route path="*" component={() => "404 NOT FOUND"} />

                </Switch>
            </div>
        </BrowserRouter>
    );
}