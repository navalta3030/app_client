import * as React from "react";

// custom imports
import BarChartComponent from "component/Charts/BarChartComponent";
import LineChartComponent from "component/Charts/LineChartComponent";
import BarChartInitialState from "reducers/InitialState/BarChartInitialState";
import LineChartInitialState from "reducers/InitialState/LineChartInitialState";

export default class ViewsHomeHighCharts extends React.Component {
  render(): React.ReactElement {
    return (
      <div>
        <BarChartComponent {...BarChartInitialState} />
        <LineChartComponent {...LineChartInitialState} />
      </div>
    );
  }
}
