import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// custom imports
import BarChartInterface from "interface/component/BarChartsInterface";

const BarChartComponent: React.FC<{ data: BarChartInterface }> = ({
  data
}): React.ReactElement => {
  /* 
    Refer to link below for documentation
    {@link https://www.highcharts.com/demo/column-basic}
  */
  const options = {
    chart: {
      type: "column"
    },
    title: { text: data.title && "Bar Chart with Data Sorting" },
    xAxis: {
      categories: data.x.data,
      crosshair: true
    },
    yAxis: {
      title: {
        text: data.y.title
      },
      min: 0,
      max: data.y.limit,
      reversed: false
    },
    series: data.y.data,
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
