import * as React from "react";

// custom import
import TableComponent from "component/TableComponent";
import TableInterface from "interface/component/TableComponent";

export default class ViewsAuthenticatedIndex extends React.Component {
  table: TableInterface = {
    columns: ["First Name", "Last Name", "Username"],
    rows: [
      ["Mark", "Otto", "@mdo"],
      ["Mark", "Otto", "@mdo"],
      ["Mark", "Otto", "@mdo"],
      ["Mark", "Otto", "@mdo"]
    ]
  };
  render(): React.ReactElement {
    return <div>{<TableComponent data={this.table}></TableComponent>}</div>;
  }
}
