import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

const App = () => (
    <div>
        <Switch>
            <Route exact path={'/'} component={Homepage}/>
            <Route path={'/hats'} component={HatsPage}/>
        </Switch>
    </div>
);

export default App;
