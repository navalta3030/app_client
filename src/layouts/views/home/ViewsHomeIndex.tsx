import * as React from "react";

// custom imports
import BannerComponent from "component/TopBannerComponent";
import { Button } from "reactstrap";
import callApiGet from "_utils/CallApi";

export default class ViewsHomeIndex extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <BannerComponent title="index"></BannerComponent>
        <Button onClick={(): any => callApiGet("/api/ml", false)}>
          Click me
        </Button>
      </div>
    );
  }
}
