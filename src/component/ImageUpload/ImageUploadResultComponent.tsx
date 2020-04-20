import * as React from "react";
import { Table } from "reactstrap";

import { IMAGE_UPLOAD_API_RESPONSE_COLUMNS_TABLE } from "_utils/ConstantVariables";
import { ImageUploadResultStateInterface } from "_interface/State/ImageUpload/ImageUploadResultStateInterface";

const ImageUploadResultComponent: React.FC<ImageUploadResultStateInterface> = ({
  data
}) => {
  /**
   *  Returns a collection of table headers specifically columns.
   *  @link - https://reactstrap.github.io/components/tables/
   */
  const getTableColumns = (): any => {
    return IMAGE_UPLOAD_API_RESPONSE_COLUMNS_TABLE.map((column, i) => (
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
              {row.map((cell, j) => {
                return <td key={j}>{cell}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };

  if (data[0][0] === "") {
    return null;
  } else {
    return (
      <Table dark>
        <thead>
          <tr>{getTableColumns()}</tr>
        </thead>

        {getTableBody()}
      </Table>
    );
  }
};

export default ImageUploadResultComponent;
