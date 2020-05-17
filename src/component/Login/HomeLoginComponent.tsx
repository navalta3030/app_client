import * as React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { RootState } from "ReduxStore";

// custom imports
import { UserLogin } from "action/AccountAction";
import { GOOGLE_CLIENT_ID } from "_utils/ConstantVariables";
import { LoginApiResponsePayloadInterface } from "_interface/ActionReducer/Account/AccountPayloadInterface";
import { AccountStateInterface } from "_interface/State/AccountStateInterface";
import { UserAlert } from "action/AlertAction";

const HomeLoginComponent: React.FC<AccountStateInterface> = ({
  UserLogin,
  UserAlert
}): React.ReactElement => {
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Sign In with Google"
      onSuccess={UserLogin}
      isSignedIn={true}
      onFailure={(): any => UserAlert("Failed to login using google account")}
      className="GoogleLoginStyle"
      onAutoLoadFinished={(successLogin): any => console.log(successLogin)}
    />
  );
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    UserLogin: (response: LoginApiResponsePayloadInterface): any => {
      dispatch(UserLogin(response));
    },
    UserAlert: (message: string): any => {
      dispatch(UserAlert(message));
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
