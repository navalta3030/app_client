import * as React from "react";
import { Container, Spinner } from "reactstrap";

import { ImageRecordStateInterface } from "_interface/State/ImageRecord/ImageRecordStateInterface";
import { GetUserImageRecord } from "action/ImageRecordAction";
import { RootState } from "ReduxStore";
import { connect } from "react-redux";
import ImageRecordTableComponent from "./ImageRecordTableComponent";
import ImageRecordInitialState from "reducers/InitialState/ImageRecordInitialState";

const ImageRecordComponent: React.FC<ImageRecordStateInterface> = ({
  fetching,
  GetUserImageRecord
}) => {
  if (GetUserImageRecord) {
    GetUserImageRecord();
  }

  if (fetching) {
    return (
      <Container className="icon-loading">
        <Spinner color="primary" />
      </Container>
    );
  }

  return <ImageRecordTableComponent data={ImageRecordInitialState.data} />;
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    GetUserImageRecord: (): any => {
      dispatch(GetUserImageRecord());
    }
  };
};

const mapStateToProps = (state: RootState): any => ({
  fetching: state.imageRecord.fetching
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageRecordComponent);
