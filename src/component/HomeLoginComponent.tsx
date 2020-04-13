import * as React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { RootState } from "ReduxStore";

// custom imports
import { UserLogin } from "action/AccountAction";
import { GOOGLE_CLIENT_ID } from "_utils/ConstantVariables";
import { LoginApiResponseInterface } from "_interface/api/LoginApiResponseInterface";
import HomeLoginComponentInterface from "_interface/component/HomeLoginComponentInterface";

const HomeLoginComponent: React.FC<HomeLoginComponentInterface> = ({
  UserLogin
}): React.ReactElement => {
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Sign In with Google"
      onSuccess={UserLogin}
      onFailure={(): any => alert("Failed to login using google oauth2")}
    />
  );
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    UserLogin: (response: LoginApiResponseInterface): any => {
      dispatch(UserLogin(response));
    }
  };
};

const mapStateToProps = (state: RootState): any => ({
  name: state.account.name,
  email: state.account.email,
  data: state.account.data,
  isAuthenticated: state.account.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeLoginComponent);
