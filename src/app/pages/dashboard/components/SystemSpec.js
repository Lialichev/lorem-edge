import React from 'react';
import { Typography } from "@material-ui/core";
import system_pv_capacity from "../media/system-pv-capacity.svg";
import get from "lodash/get";
import system_ac_capacity from "../media/system-ac-capacity.svg";
import system_age from "../media/system-age.svg";

const SystemSpec = ({ data }) => (
  <div className="bg-card p-15 h-full flex flex-col">
    <Typography
      variant="body1"
      color="textSecondary"
      className="font-light text-18 text-white flex-shrink-0"
    >
      System specifications
    </Typography>
    <ul className="list flex flex-col flex-1 justify-evenly">
      <li className="list__item">
        <div className="list__image">
          <img src={ system_pv_capacity } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            System PV capacity:
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'pvCapacity') } kW` }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ system_ac_capacity } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            System AC capacity:
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'acCapacity') } kW` }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ system_age } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            System age:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            component="div"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'sysAge.years') } years & ${ get(data, 'sysAge.months') } months` }
          </Typography>
        </div>
      </li>
    </ul>
  </div>
);

export default SystemSpec;