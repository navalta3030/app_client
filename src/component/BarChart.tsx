import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import BarChartInterface from "interface/BarChartsInterface";

export default function BarChart(props: BarChartInterface): React.ReactElement {
  const options = {
    chart: {
      type: "column"
    },
    title: { text: props.data.title && "Bar Chart with Data Sorting" },
    xAxis: {
      categories: props.data.x.data,
      crosshair: true
    },
    yAxis: {
      title: {
        text: props.data.y.title
      },
      min: 0,
      max: props.data.y.limit,
      reversed: false
    },
    series: props.data.y.data,
    legend: {
      enabled: true
    }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
