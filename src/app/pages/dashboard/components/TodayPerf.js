import React from 'react';
import { Typography } from "@material-ui/core";
import get from "lodash/get";
import peak_power_produced from "../media/peak-power-produced.svg";
import energy_produced from "../media/energy-produced.svg";
import energy_consumed from "../media/energy-consumed.svg";
import net_energy from "../media/net-energy.svg";
import proportion_self_consumed from "../media/proportion-self-consumed.svg";
import estimated_energy_saved from "../media/estimated-energy-saved.svg";
import estimated_money_saved from "../media/estimated-money-saved.svg";

const TodayPerf = ({ data }) => (
  <div className="bg-card p-15 h-full flex flex-col">
    <Typography
      variant="body1"
      color="textSecondary"
      className="font-light text-white text-18 flex-shrink-0"
    >
      Today’s performance
    </Typography>
    <ul className="list flex-1 flex flex-col justify-evenly">
      <li className="list__item">
        <div className="list__image">
          <img src={ peak_power_produced } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Peak power produced:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'peakPowerProd.value') } ${ get(data, 'peakPowerProd.postfix') }W` }
          </Typography>
        </div>
      </li>
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
          <img src={ energy_consumed } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Energy consumed:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'energyCons.value') } ${ get(data, 'energyCons.postfix') }Wh` }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ net_energy } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Net energy:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            {
              get(data, 'netEnergy.value') && (
                <>
                  {
                    (Number(get(data, 'netEnergy.value')) > 0)
                      ? `${ get(data, 'netEnergy.value') } ${ get(data, 'netEnergy.postfix') }Wh exported`
                      : `${ get(data, 'netEnergy.value').replace('-', '') } ${ get(data, 'netEnergy.postfix') }Wh imported`
                  }
                </>
              )
            }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ proportion_self_consumed } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Proportion self consumed:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'proportSelfCons') } %` }
          </Typography>
        </div>
      </li>
      <li className="list__item">
        <div className="list__image">
          <img src={ estimated_energy_saved } alt=""/>
        </div>
        <div className="list__info">
          <Typography
            variant="body1"
            color="textSecondary"
            className="font-light text-14 mr-5"
          >
            Estimated energy saved:
          </Typography>
          <Typography
            variant="body1"
            color="textPrimary"
            className="text-14 font-normal text-white"
          >
            { `${ get(data, 'estEnergySaved.value') } ${ get(data, 'estEnergySaved.postfix') }Wh` }
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
    </ul>
  </div>
);

export default TodayPerf;