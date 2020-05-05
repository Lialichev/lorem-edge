import React from 'react';
import { Typography } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import map from "lodash/map";
import get from "lodash/get";

const TodayPerfChart = ({ data }) => (
  <div className="bg-card p-15 h-full flex flex-col">
    <Typography
      variant="body1"
      color="textSecondary"
      className="font-light text-white text-18 flex justify-between items-start flex-shrink-0"
    >
      Today’s performance
    </Typography>
    <div className="w-full mt-15 flex-1">
      <Line
        data={ {
          labels: map(get(data, 'production'), ({ date }) => date.replace(':00', '')),
          datasets: [
            {
              label: 'Production',
              lineTension: 0.5,
              backgroundColor: 'rgb(129,36,27)',
              borderColor: 'transparent',
              data: map(get(data, 'production'), ({ date, value }) => {
                return {
                  x: date.replace(':00', ''),
                  y: value
                }
              }),
              order: 2
            },
            {
              label: 'FeedIn (export)',
              lineTension: 0.5,
              backgroundColor: 'rgb(205,33,40)',
              borderColor: 'transparent',
              data: map(get(data, 'feedIn'), ({ date, value }) => {
                return {
                  x: date.replace(':00', ''),
                  y: value
                }
              }),
              order: 1
            },
            {
              label: 'Purchased (import)',
              lineTension: 0.5,
              backgroundColor: '#186bd0',
              borderColor: 'transparent',
              data: map(get(data, 'purchased'), ({ date, value }) => {
                return {
                  x: date.replace(':00', ''),
                  y: value ? -value : value
                }
              }),
              order: 1
            },
            {
              label: 'Consumption',
              lineTension: 0.5,
              backgroundColor: 'rgb(21,69,140)',
              borderColor: 'transparent',
              data: map(get(data, 'consumption'), ({ date, value }) => {
                return {
                  x: date.replace(':00', ''),
                  y: value ? -value : value
                }
              }),
              order: 2
            },
          ]
        } }
        options={ {
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: '#c5c5c5',
              boxWidth: 12
            },
            position: 'bottom'
          },
          tooltips: {
            intersect: false,
            mode: 'index',
          },
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            xAxes: [ {
              gridLines: {
                color: '#fff',
                drawOnChartArea: false,
                // tickMarkLength: 5,
              },
              ticks: {
                fontColor: '#c5c5c5',
                fontSize: 13,
                padding: 5,
              },
            } ],
            yAxes: [ {
              ticks: {
                beginAtZero: true,
                fontColor: '#c5c5c5',
                fontSize: 13,
                padding: 5,
                callback: (value) => value + ' kW',
              },
              gridLines: {
                color: '#fff',
                drawOnChartArea: false,
              }
            } ]
          }
        } }
      />
    </div>
  </div>
);

export default TodayPerfChart;