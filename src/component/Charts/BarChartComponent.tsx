import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// custom imports
import BarChartsStateInterface from "_interface/State/Chart/BarChartsStateInterface";

const BarChartComponent: React.FC<BarChartsStateInterface> = ({
  title,
  x,
  y
}): React.ReactElement => {
  /**
   *  Refer to link below for documentation
   * {@link https://www.highcharts.com/demo/column-basic}
   */
  const options = {
    chart: {
      type: "column"
    },
    title: { text: title && "Bar Chart with Data Sorting" },
    xAxis: {
      categories: x.data,
      crosshair: true
    },
    yAxis: {
      title: {
        text: y.title
      },
      min: 0,
      max: y.limit,
      reversed: false
    },
    series: y.data,
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

export default BarChartComponent;
