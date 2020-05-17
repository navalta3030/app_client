import * as React from "react";

// custom imports
import ImageRecordComponent from "component/ImageRecord/ImageRecordComponent";
import ImageRecordInitialState from "reducers/InitialState/ImageRecordInitialState";

export default class ViewsAuthenticatedRecord extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <ImageRecordComponent
          {...ImageRecordInitialState}
        ></ImageRecordComponent>
      </div>
    );
  }
}
