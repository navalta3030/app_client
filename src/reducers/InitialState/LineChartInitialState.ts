import LineChartsStateInterface from "_interface/State/Chart/LineChartsStateInterface";

const LineChartInitialState: LineChartsStateInterface = {
  title: "Line Chart",
  x: {
    label: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "November",
      "December"
    ],
    title: "Dates"
  },
  y: {
    data: [
      {
        dataName: "Time Series first",
        data: [2, 4, 1.25, 2, 6.75, 14.25, 20.4, 3, 19.5, 24]
      },
      {
        dataName: "Time Series second",
        data: [8, 5, 2.5, 3.25, 7.75, 10, 12, 18.25, 15.5]
      },
      {
        dataName: "Time Series third",
        data: [0, 8, 5, 2.5, 3.25, 7.75, 10, 12, 18.25, 15.5]
      }
    ],
    limit: 30,
    title: "Dummy Y label"
  }
};

export default LineChartInitialState;
