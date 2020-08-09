import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/homepage/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/SingInSignUp/SignInSignUp";

const App = () => (
    <div>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={Homepage}/>
            <Route path={'/shop'} component={ShopPage}/>
            <Route path={'/signin'} component={SignInSignUp}/>
        </Switch>
    </div>
);

export default App;
