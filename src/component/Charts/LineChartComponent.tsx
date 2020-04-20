import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// custom imports
import lineChartInterface from "_interface/State/Chart/LineChartsStateInterface";

const LineChartComponent: React.FC<lineChartInterface> = ({
  title,
  x,
  y
}): React.ReactElement => {
  /**
   *  Refer to link below for documentation
   *  {@link https://www.highcharts.com/demo/line-basic}
   */
  const options = {
    chart: {
      type: "spline"
    },
    title: { text: title && "Line Chart" },
    xAxis: {
      title: {
        text: x.title
      },
      categories: x.label,
      max: x.label.length - 1
    },
    yAxis: {
      title: {
        text: y.title
      },
      min: 0,
      max: y.limit || 30,
      reversed: false
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    series: y.data.map((dataObject: { dataName: any; data: any }) => {
      return {
        name: dataObject.dataName,
        dataLabels: {
          enabled: false,
          format: "{y:,.2f}"
        },
        data: dataObject.data
      };
    }),
    legend: {
      enabled: true
    }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChartComponent;
