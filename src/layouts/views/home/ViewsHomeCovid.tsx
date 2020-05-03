import * as React from "react";
import CovidAnalyzationComponent from "component/Covid19/CovidAnalyzationComponent";

// custom imports
export default class ViewsHomeCovid extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <CovidAnalyzationComponent></CovidAnalyzationComponent>
      </div>
    );
  }
}
