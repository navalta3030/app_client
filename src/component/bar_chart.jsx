import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function BarChart(props) {
    
    const options = {
        chart: {
            type: 'column'
        },
        title: {text: props.data.title && 'Bar Chart with Data Sorting'} ,
        xAxis: {
            categories: props.data.x.data,
            crosshair: true
        },
        yAxis: {
            title: {
                text: props.data.y.label
            },
            min: 0,
            max: props.data.y.limit,
            reversed: false
        },
        series: props.data.y.data,
        legend: {
            enabled: true
        }
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
