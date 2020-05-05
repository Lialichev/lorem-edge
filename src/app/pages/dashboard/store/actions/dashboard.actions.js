import axios from 'axios';
import * as GeneralActions from "../../../../store/actions";

export const GET_DASHBOARD_INFO = '[DASHBOARD APP] GET DASHBOARD INFO';
export const CLEAR = '[DASHBOARD APP] CLEAR DASHBOARD';

export function getDashboardInfo() {

  return (dispatch) => {
    dispatch({
      type: GET_DASHBOARD_INFO,
      payload: {
        "dataRefresh": 5,
        "systemName": "Test Title",
        "systemSpec": {
          "pvCapacity": "10.55",
          "acCapacity": "12.55",
          "sysAge": {
            "years": 0,
            "months": 10
          }
        },
        "totalSysPerf": {
          "energyProd": {
            "value": "33.00",
            "postfix": "M"
          },
          "estMoneySaved": "126661.65",
          "eqTressPlanted": 51,
          "carsTakenOff": {
            "value": "3.9",
            "postfix": ""
          }
        },
        "logo": "data:image/png;base64,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",
        "todayPerfGraph": {
          "production": [
            {
              "date": "05:00 AM",
              "value": 0
            },
            {
              "date": "06:00 AM",
              "value": 0.023
            },
            {
              "date": "07:00 AM",
              "value": 2.613
            },
            {
              "date": "08:00 AM",
              "value": 5.536
            },
            {
              "date": "09:00 AM",
              "value": 8.423
            },
            {
              "date": "10:00 AM",
              "value": 12.442
            },
            {
              "date": "11:00 AM",
              "value": 11.388
            },
            {
              "date": "12:00 PM",
              "value": 10.377
            },
            {
              "date": "01:00 PM",
              "value": 9.142
            },
            {
              "date": "02:00 PM",
              "value": 4.588
            },
            {
              "date": "03:00 PM",
              "value": 1.386
            },
            {
              "date": "04:00 PM",
              "value": 0.65
            },
            {
              "date": "05:00 PM",
              "value": 0.116
            },
            {
              "date": "06:00 PM",
              "value": 0
            },
            {
              "date": "07:00 PM",
              "value": 0
            }
          ],
          "consumption": [
            {
              "date": "05:00 AM",
              "value": 0.929
            },
            {
              "date": "06:00 AM",
              "value": 0.81
            },
            {
              "date": "07:00 AM",
              "value": 1.399
            },
            {
              "date": "08:00 AM",
              "value": 3.743
            },
            {
              "date": "09:00 AM",
              "value": 4.617
            },
            {
              "date": "10:00 AM",
              "value": 5.405
            },
            {
              "date": "11:00 AM",
              "value": 4.743
            },
            {
              "date": "12:00 PM",
              "value": 5.203
            },
            {
              "date": "01:00 PM",
              "value": 5.264
            },
            {
              "date": "02:00 PM",
              "value": 4.931
            },
            {
              "date": "03:00 PM",
              "value": 5.736
            },
            {
              "date": "04:00 PM",
              "value": 3.61
            },
            {
              "date": "05:00 PM",
              "value": 1.696
            },
            {
              "date": "06:00 PM",
              "value": 0.871
            },
            {
              "date": "07:00 PM",
              "value": 0.939
            }
          ],
          "feedIn": [
            {
              "date": "05:00 AM",
              "value": 0
            },
            {
              "date": "06:00 AM",
              "value": 0
            },
            {
              "date": "07:00 AM",
              "value": 1.285
            },
            {
              "date": "08:00 AM",
              "value": 1.853
            },
            {
              "date": "09:00 AM",
              "value": 3.942
            },
            {
              "date": "10:00 AM",
              "value": 7.037
            },
            {
              "date": "11:00 AM",
              "value": 6.646
            },
            {
              "date": "12:00 PM",
              "value": 5.176
            },
            {
              "date": "01:00 PM",
              "value": 3.887
            },
            {
              "date": "02:00 PM",
              "value": 0.658
            },
            {
              "date": "03:00 PM",
              "value": 0
            },
            {
              "date": "04:00 PM",
              "value": 0
            },
            {
              "date": "05:00 PM",
              "value": 0
            },
            {
              "date": "06:00 PM",
              "value": 0
            },
            {
              "date": "07:00 PM",
              "value": 0
            }
          ],
          "purchased": [
            {
              "date": "05:00 AM",
              "value": 0.929
            },
            {
              "date": "06:00 AM",
              "value": 0.787
            },
            {
              "date": "07:00 AM",
              "value": 0.071
            },
            {
              "date": "08:00 AM",
              "value": 0.06
            },
            {
              "date": "09:00 AM",
              "value": 0.136
            },
            {
              "date": "10:00 AM",
              "value": 0
            },
            {
              "date": "11:00 AM",
              "value": 0.001
            },
            {
              "date": "12:00 PM",
              "value": 0.002
            },
            {
              "date": "01:00 PM",
              "value": 0.009
            },
            {
              "date": "02:00 PM",
              "value": 1.001
            },
            {
              "date": "03:00 PM",
              "value": 4.35
            },
            {
              "date": "04:00 PM",
              "value": 2.96
            },
            {
              "date": "05:00 PM",
              "value": 1.58
            },
            {
              "date": "06:00 PM",
              "value": 0.871
            },
            {
              "date": "07:00 PM",
              "value": 0.939
            }
          ]
        },
        "todayPerf": {
          "peakPowerProd": {
            "value": "13.74",
            "postfix": "k"
          },
          "energyProd": {
            "value": "66.68",
            "postfix": "k"
          },
          "energyCons": {
            "value": "58.63",
            "postfix": "k"
          },
          "netEnergy": {
            "value": "8.05",
            "postfix": "k"
          },
          "proportSelfCons": 62,
          "estEnergySaved": {
            "value": "36.20",
            "postfix": "k"
          },
          "estMoneySaved": "404.34"
        },
        "monthlyProd": [
          {
            "date": "Jun 19",
            "value": 0.323816
          },
          {
            "date": "Jul 19",
            "value": 1.531326
          },
          {
            "date": "Aug 19",
            "value": 1.746534
          },
          {
            "date": "Sep 19",
            "value": 2.107522
          },
          {
            "date": "Oct 19",
            "value": 3.644299
          },
          {
            "date": "Nov 19",
            "value": 4.639801
          },
          {
            "date": "Dec 19",
            "value": 4.27584
          },
          {
            "date": "Jan 20",
            "value": 3.747759
          },
          {
            "date": "Feb 20",
            "value": 3.601617
          },
          {
            "date": "Mar 20",
            "value": 3.343621
          },
          {
            "date": "Apr 20",
            "value": 3.495394
          },
          {
            "date": "May 20",
            "value": 0.416178
          }
        ]
      },
    });
  }

  // const request = axios.get('/dashboard');
  //
  // return (dispatch) =>
  //     request
  //         .then((response) => {
  //             dispatch({
  //                 type: GET_DASHBOARD_INFO,
  //                 payload: response.data,
  //             });
  //         })
  //         .catch(() => {
  //             dispatch(GeneralActions.showMessage({
  //                 message: 'Error load data',
  //                 variant: 'error'
  //             }));
  //         })
}

export function clear() {

  return (dispatch) =>
    dispatch({ type: CLEAR })
}