import React from "react";
import { Table } from "reactstrap";

import TableInterface from "interface/component/TableComponent";

const TableComponent: React.FC<{ data: TableInterface }> = ({
  data
}): React.ReactElement => {
  const getTableColumns = (): any => {
    data.columns.unshift("#");
    return data.columns.map((column, i) => <th key={i}>{column}</th>);
  };

  const getTableBody = (): React.ReactElement => {
    return (
      <tbody>
        {data.rows.map((row, i) => {
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

  return (
    <Table dark>
      <thead>
        <tr>{getTableColumns()}</tr>
      </thead>

      {getTableBody()}
    </Table>
  );
};

export default TableComponent;
