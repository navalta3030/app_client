import * as React from "react";

// custom imports
import BannerComponent from "component/TopBannerComponent";

export default class ViewsHomeIndex extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <BannerComponent title="index"></BannerComponent>
      </div>
    );
  }
}
