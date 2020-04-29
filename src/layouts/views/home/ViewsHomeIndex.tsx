import * as React from "react";

// custom imports
import BannerComponent from "component/Banner/TopBannerComponent";
import BannerInitialState from "reducers/InitialState/BannerInitialState";

export default class ViewsHomeIndex extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <BannerComponent {...BannerInitialState}></BannerComponent>
      </div>
    );
  }
}
