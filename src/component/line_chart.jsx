import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function LineChart(props) {
    // console.log(props.data.title)
    const options = {
        chart: {
            type: 'line', // Update if neccessary
        },
        title: {text: 'Line Chart'} || props.data.title,
        xAxis: props.data.xAxis,
        yAxis: {
            title: {
                text: 'Description Y'
            },
            min: 0,
            max: 30,
            reversed: false
        },
        series: [
            {
                name: 'Test Series 1',
                dataLabels: {
                    enabled: true,
                    format: '{y:,.2f}'
                },
                data: props.data.arr_data1
            },
            {
                name: 'Test Series 2',
                dataLabels: {
                    enabled: true,
                    format: '{y:,.2f}'
                },
                data: props.data.arr_data2
            }
        ],
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
