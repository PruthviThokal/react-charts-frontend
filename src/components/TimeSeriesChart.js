import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

const TimeSeriesChart = ({ dataPoints }) => {
  const { time_stamp, original_value, forecasted_value, min_value, max_value } =
    dataPoints;

  var timeFormat = "DD/MM/YYYY";
  return (
    <div>
      <Line
        data={{
          labels: time_stamp.map((i) => new Date(i).toLocaleDateString()),
          datasets: [
            {
              label: "original_value",
              data: original_value,
              fill: false,
            },
            {
              label: "forcasted_value",
              data: forecasted_value,
              fill: false,
            },
            {
              label: "min_band",
              data: min_value,
              fill: false,
            },
            {
              label: "max_band",
              data: max_value,
              fill: "-1",
            },
          ],
        }}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "Chart.js Time Scale",
          },
          scales: {
            y: {
              suggestedMin: 0,
            },
            xAxes: [
              {
                type: "time",
                time: {
                  format: timeFormat,
                  tooltipFormat: "ll",
                },
                scaleLabel: {
                  display: true,
                  labelString: "Date",
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "value",
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default TimeSeriesChart;
