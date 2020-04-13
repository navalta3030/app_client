import * as React from "react";

// custom import
import TableComponent from "component/TableComponent";
import TableComponentInterface from "_interface/component/TableComponentInterface";

export default class ViewsAuthenticatedIndex extends React.Component {
  table: TableComponentInterface = {
    columns: ["First Name", "Last Name", "Username"],
    rows: [
      ["Mark", "Otto", "@mdo"],
      ["Mark", "Otto", "@mdo"],
      ["Mark", "Otto", "@mdo"],
      ["Mark", "Otto", "@mdo"]
    ]
  };
  render(): React.ReactElement {
    return <div>{<TableComponent {...this.table}></TableComponent>}</div>;
  }
}
