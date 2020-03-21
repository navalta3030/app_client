import * as React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import lineChartInterface from 'interface/linechart'

export default function LineChart(props: lineChartInterface) {

    const options = {
        chart: {
            type: 'spline',
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
        series: props.data.y.data.map((data_object: { data_name: any; data: any }) => {
            return {
                name: data_object.data_name,
                dataLabels: {
                    enabled: false,
                    format: '{y:,.2f}'
                },
                data: data_object.data
            }
        }),
        legend: {
            enabled: true
        },
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}
