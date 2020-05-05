import React from 'react';
import { Typography } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import map from "lodash/map";

const MonthlyProd = ({ data }) => (
  <div className="bg-card p-15 h-full">
    <Typography
      variant="body1"
      color="textSecondary"
      className="font-light text-white text-18"
    >
      Monthly production
    </Typography>
    <div className="w-full mt-15">
      <Bar
        data={ {
          labels: map(data, ({ date }) => date),
          datasets: [
            {
              barThickness: 40,
              backgroundColor: '#dd2429',
              borderColor: '#dd2429',
              borderWidth: 1,
              data: map(data, ({ value }) => value)
            },
          ]
        } }
        options={ {
          maintainAspectRatio: false,
          legend: { display: false },
          tooltips: {
            enabled: false
          },
          hover: {
            animationDuration: 0
          },
          animation: {
            duration: 1,
            onComplete: function () {
              var chartInstance = this.chart,
                ctx = chartInstance.ctx;
              ctx.font = '12px "Roboto", sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              ctx.fillStyle = '#c5c5c5';

              this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                  var data = dataset.data[index];
                  if (data) data = data.toFixed(2);
                  ctx.fillText(data + ' MWh', bar._model.x, bar._model.y - 5);
                });
              });
            }
          },
          layout: {
            padding: {
              top: 20,
            }
          },
          scales: {
            xAxes: [ {
              ticks: {
                callback: (value) => value.toUpperCase(),
                fontColor: '#c5c5c5'
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            } ],
            yAxes: [ {
              ticks: {
                display: false,
                beginAtZero: true
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            } ]
          }
        } }
      />
    </div>
  </div>
);

export default MonthlyProd;