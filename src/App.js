import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/homepage/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/SingInSignUp/SignInSignUp";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            // this.setState({currentUser: user})
            await createUserProfileDocument(user);
            console.log(user)
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path={'/'} component={Homepage}/>
                    <Route path={'/shop'} component={ShopPage}/>
                    <Route path={'/signin'} component={SignInSignUp}/>
                </Switch>
            </div>
        )
    }
}

export default App;
