import * as React from "react";
import { connect } from "react-redux";

// custom imports
import AuthenticatedLayout from "layouts/AuthenticatedLayout";
import HomeLayout from "layouts/HomeLayout";
import { UserValidateAuthentication } from "action/AccountAction";

interface Props {
  isAuthenticated: boolean;
  UserValidateAuthentication: any;
}

class AuthenticationSwitch extends React.Component<Props> {
  constructor(props: any) {
    super(props);

    this.props.UserValidateAuthentication();
  }
  render(): React.ReactElement {
    if (this.props.isAuthenticated) {
      return <AuthenticatedLayout UserLogOut={null}></AuthenticatedLayout>;
    } else {
      return <HomeLayout></HomeLayout>;
    }
  }
}

const mapStateToProps = (state: any): any => ({
  isAuthenticated: state.account.isAuthenticated
});

const mapDispatchToProps = (dispatch: any): any => {
  return {
    UserValidateAuthentication: (): any => {
      dispatch(UserValidateAuthentication());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationSwitch);
