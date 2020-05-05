import React, { useEffect } from 'react';
import { Grid } from "@material-ui/core";
import * as authActions from '../../../auth/store/actions';
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../store/actions";
import get from 'lodash/get';
import Top from "./Top";
import SystemSpec from "./SystemSpec";
import TotalSystemPerf from "./TotalSystemPerf";
import SystemLogo from "./SystemLogo";
import TodayPerfChart from "./TodayPerfChart";
import TodayPerf from "./TodayPerf";
import MonthlyProd from "./MonthlyProd";

function Content({ data }) {
  const dispatch = useDispatch();

  const user = useSelector(({ auth }) => auth.user);

  useEffect(() => {

    let timerId;

    if (data) {
      timerId = setInterval(() => {
        dispatch(Actions.getDashboardInfo());
      }, Number(data.dataRefresh) * 60000);
    }

    return () => {
      clearInterval(timerId);
    }
    // eslint-disable-next-line
  }, [ dispatch ]);

  const logoutUser = () => {
    dispatch(authActions.logoutUser());
  };

  return (
    <div className="dashboard__content w-full">
      <Grid
        container
        spacing={ 3 }
      >

        <Grid item xs={ 12 }>
          <Top
            logoutUser={ logoutUser }
            systemName={ get(data, 'systemName') }
            firstName={ user.data.firstName }
          />
        </Grid>

        {
          data && (
            <>
              <Grid item xs={ 3 } className="flex">
                <Grid
                  container
                  spacing={ 3 }
                >
                  <Grid item xs={ 12 }>
                    <SystemSpec data={ get(data, 'systemSpec') }/>
                  </Grid>
                  <Grid item xs={ 12 }>
                    <TotalSystemPerf data={ get(data, 'totalSysPerf') }/>
                  </Grid>
                  <Grid item xs={ 12 }>
                    <SystemLogo data={ get(data, 'logo') }/>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={ 9 } className="flex">

                <Grid
                  container
                  spacing={ 3 }
                  alignItems="stretch"
                >
                  <Grid item xs={ 8 }>
                    <TodayPerfChart data={ get(data, 'todayPerfGraph') }/>
                  </Grid>
                  <Grid item xs={ 4 }>
                    <TodayPerf data={ get(data, 'todayPerf') }/>
                  </Grid>
                  <Grid item xs={ 12 }>
                    <MonthlyProd data={ get(data, 'monthlyProd') }/>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )
        }

      </Grid>
    </div>
  );
}

export default Content;