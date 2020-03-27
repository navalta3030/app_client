import * as React from "react";

// custom imports
import BannerComponent from "component/TopBannerComponent";

export default class ViewsAuthenticatedIndex extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <BannerComponent title="index"></BannerComponent>
      </div>
    );
  }
}
