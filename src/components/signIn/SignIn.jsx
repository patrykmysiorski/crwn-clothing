import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../customButton/CustomButton";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/userActions";
import { connect } from "react-redux";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className={"sign-in"}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name={"email"}
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            name={"password"}
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type={"submit"}>Sign in</CustomButton>
            <CustomButton
              type={"button"}
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              {" "}
              SIGN IN WITH GOOGLE{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
