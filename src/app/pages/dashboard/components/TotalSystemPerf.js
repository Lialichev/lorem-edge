import React from 'react';
import { Typography } from "@material-ui/core";
import energy_produced from "../media/energy-produced.svg";
import get from "lodash/get";
import estimated_money_saved from "../media/estimated-money-saved.svg";
import trees_planted from "../media/trees-planted.svg";
import cars_off_road from "../media/cars-off-road.svg";

const TotalSystemPerf = ({ data }) => (
  <div className="bg-card p-15 h-full flex flex-col">
    <Typography
      variant="body1"
      color="textSecondary"
      className="font-light text-white text-18 flex-shrink-0"
    >
      Total system performance
    </Typography>
    <ul className="list flex flex-col flex-1 justify-evenly">
      <li className="list__item">
        <div className="list__image">
          <img src={ energy_produced } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Energy produced:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'energyProd.value') } ${ get(data, 'energyProd.postfix') }Wh` }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ estimated_money_saved } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Estimated money saved:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `$${ get(data, 'estMoneySaved') }` }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ trees_planted } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Equivalent trees planted:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'eqTressPlanted') } trees` }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ cars_off_road } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Cars taken off road:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'carsTakenOff.value') } cars` }
          </Typography>
        </div>
      </li>
    </ul>
  </div>
);

export default TotalSystemPerf;