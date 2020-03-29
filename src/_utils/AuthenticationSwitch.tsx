import * as React from "react";
import { connect } from "react-redux";

// custom imports
import AuthenticatedLayout from "layouts/AuthenticatedLayout";
import HomeLayout from "layouts/HomeLayout";
import { UserValidateAuthentication, UserLogOut } from "action/AccountAction";
import { RootState } from "ReduxStore";

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
      return (
        <AuthenticatedLayout UserLogOut={UserLogOut}></AuthenticatedLayout>
      );
    } else {
      return <HomeLayout></HomeLayout>;
    }
  }
}

const mapStateToProps = (state: RootState): any => ({
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
