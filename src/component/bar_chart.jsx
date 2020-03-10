import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function BarChart(props) {
    // console.log(props.data.title)
    const options = {
        chart: {
            type: 'bar'
        },
        title: {text: 'Bar Chart with Data Sorting'} || props.data.title,
        xAxis: {
            title: {
                text: 'Description X'
            },
            type: 'category',
        },
        yAxis: {
            title: {
                text: 'Description Y'
            },
            min: 0,
            max: 30,
            reversed: false
        },
        series: [{
            name: 'Test Series 1',
            zoneAxis: 'x',
            zones: [{
                value: 1, // TODO: set to 1 on sort by high
                color: '#ff4d40'
            }],
            dataLabels: {
                enabled: true,
                format: '{y:,.2f}'
            },
            dataSorting: {
                enabled: true, // TODO: set to true on sort by high
                sortKey: 'y'
            },
            data: props.data.json_data
        }],
        legend: {
            enabled: false
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
