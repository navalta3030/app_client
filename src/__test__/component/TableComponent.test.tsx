import React from "react";
import ReactDom from "react-dom";

// custom import
import tableData from "./variables/TableVar";
import TableComponent from "component/TableComponent";

it("renders linechart component without crashing", () => {
  const div = document.createElement("div");

  ReactDom.render(<TableComponent {...tableData} />, div);
});
