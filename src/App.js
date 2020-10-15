import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/homepage/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/SingInSignUp/SignInSignUp";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelectors";
import CheckoutPage from "./components/checkout/Checkout";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route exact path={"/checkout"} component={CheckoutPage} />
          <Route
            exact
            path={"/signin"}
            render={() =>
              this.props.currentUser ? <Redirect to={"/"} /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
