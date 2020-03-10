import React, { Component } from 'react'
import BarChart from '../../component/bar_chart'
import LineChart from '../../component/line_chart'

export default class highchart extends Component {
    json_input = {
        title: {
            text: 'High Chart'
        },
        json_data: [
            {
                name: 'Series F',
                y: 10
            },
            {
                name: 'Series B',
                y: 3.5
            },
            {
                name: 'Series C',
                y: 5.5
            },
            {
                name: 'Series D',
                y: 7.5
            },
            {
                name: 'Series E',
                y: 9.5
            },
            {
                name: 'Series A',
                y: 2
            }, 
            {
                name: 'Series H',
                y: 13.5
            },
            {
                name: 'Series G',
                y: 12
            },
            {
                name: 'Series J',
                y: 19.5
            },
            {
                name: 'Series I',
                y: 15
            }
        ],
        // ### ARRAY Based Input ###
        xAxis: {
            title: {
                text: 'Description X'
            },
        },
        arr_data1: [8, 5, 2.5, 3.25, 7.75, 10, 12, 18.25, 15.5],
        arr_data2: [2, 4, 1.25, 2, 6.75, 14.25, 20.4, 3, 19.5, 24]
    }

    render() {
        return (
            <div>
                <BarChart 
                    data={this.json_input}
                />
                <LineChart 
                    data={this.json_input}
                />
            </div>
        )
  }
}

