import * as React from "react";
import { Table, Jumbotron } from "reactstrap";

import { IMAGE_RECORD_API_RESPONSE_COLUMNS_TABLE } from "_utils/ConstantVariables";

import { RootState } from "ReduxStore";
import { connect } from "react-redux";
import { ImageRecordTableStateInterface } from "_interface/State/ImageRecord/ImageRecordTableStateInterface";
import _ from "lodash";

const ImageRecordTableComponent: React.FC<ImageRecordTableStateInterface> = ({
  data
}) => {
  /**
   *  Returns a collection of table headers specifically columns.
   *  @link - https://reactstrap.github.io/components/tables/
   */
  const getTableColumns = (): any => {
    return IMAGE_RECORD_API_RESPONSE_COLUMNS_TABLE.map((column, i) => (
      <th key={i}>{column}</th>
    ));
  };

  /**
   *  Returns a collection of table rows.
   *  {@link https://reactstrap.github.io/components/tables/}
   */
  const getTableBody = (): React.ReactElement => {
    return (
      <tbody>
        {data.map((row, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i}</th>
              <td>
                <img src={row.link} height="250px" width="250px" alt="-"></img>
              </td>
              <td>{row.link.split(".com_")[1]}</td>
              <td>{row.assistant_prediction}</td>
              <td>{row.doctor_prediction}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  if (_.isEmpty(data)) {
    return <Jumbotron>No Records</Jumbotron>;
  }

  if (data[0].assistant_prediction === "") {
    return <Jumbotron>No Records</Jumbotron>;
  }

  return (
    <Table dark>
      <thead>
        <tr>{getTableColumns()}</tr>
      </thead>

      {getTableBody()}
    </Table>
  );
};

const mapStateToProps = (state: RootState): any => ({
  data: state.imageRecord.data
});

export default connect(mapStateToProps, null)(ImageRecordTableComponent);
