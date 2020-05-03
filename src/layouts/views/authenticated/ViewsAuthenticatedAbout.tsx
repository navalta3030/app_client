import * as React from "react";
import AboutComponent from "component/About/AboutComponent";

// custom imports
export default class ViewsAuthenticatedAbout extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <AboutComponent></AboutComponent>
      </div>
    );
  }
}
