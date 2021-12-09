import React from "react";
import { Route, Switch } from "react-router-dom";
import { Configure, Master, Message } from "../pages";

export default function Routes() {
    return (
        <Switch>
            <Route path="/configure" component={Configure}></Route>
            <Route path="/master" component={Master}></Route>
            <Route path="/message" component={Message}></Route>
        </Switch>
    );
}
