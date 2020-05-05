import * as Actions from '../actions';

const initialState = {
    data: null,
};

const dashboardReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_DASHBOARD_INFO: {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.CLEAR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default dashboardReducer;
