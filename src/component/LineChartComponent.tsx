import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// custom imports
import lineChartInterface from "interface/LineChartsInterface";

export default function LineChartComponent(props: lineChartInterface): any {
  const options = {
    chart: {
      type: "spline"
    },
    title: { text: props.data.title && "Line Chart" },
    xAxis: {
      title: {
        text: props.data.x.title
      },
      categories: props.data.x.label,
      max: props.data.x.label.length - 1
    },
    yAxis: {
      title: {
        text: props.data.y.title
      },
      min: 0,
      max: props.data.y.limit || 30,
      reversed: false
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    series: props.data.y.data.map(
      (dataObject: { dataName: any; data: any }) => {
        return {
          name: dataObject.dataName,
          dataLabels: {
            enabled: false,
            format: "{y:,.2f}"
          },
          data: dataObject.data
        };
      }
    ),
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
