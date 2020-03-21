import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import BarChartInterface from "interface/barchart";

export default function BarChart(props: BarChartInterface) {

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
