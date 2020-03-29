import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// custom imports
import lineChartInterface from "interface/component/LineChartsInterface";

const LineChartComponent: React.FC<{ data: lineChartInterface }> = ({
  data
}): React.ReactElement => {
  /*
    Refer to link below for documentation
    {@link https://www.highcharts.com/demo/line-basic}
  */
  const options = {
    chart: {
      type: "spline"
    },
    title: { text: data.title && "Line Chart" },
    xAxis: {
      title: {
        text: data.x.title
      },
      categories: data.x.label,
      max: data.x.label.length - 1
    },
    yAxis: {
      title: {
        text: data.y.title
      },
      min: 0,
      max: data.y.limit || 30,
      reversed: false
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    series: data.y.data.map((dataObject: { dataName: any; data: any }) => {
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
