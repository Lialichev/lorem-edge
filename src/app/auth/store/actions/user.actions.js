import history from '../../../../@history';
import { setInitialSettings } from '../../../store/actions/theme';
import merge from 'lodash/merge';
import store from '../../../store';
import * as Actions from '../../../store/actions';
import jwtService from '../../../services/jwtService';

export const SET_USER_DATA = '[USER] SET DATA';
export const REMOVE_USER_DATA = '[USER] REMOVE DATA';
export const USER_LOGGED_OUT = '[USER] LOGGED OUT';

/**
 * Set User Data
 */
export function setUserData(user) {
    return (dispatch) => {

        /*
        Set User Settings
         */
        // dispatch(setDefaultSettings(user.data.settings));

        /*
        Set User Data
         */
        dispatch({
            type: SET_USER_DATA,
            payload: {
                role: user.isAdmin ? ['admin'] : ['user'],
                data: {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                }
            }
        })
    }
}

/**
 * Update User Settings
 */
export function updateUserSettings(settings) {
    return (dispatch, getState) => {
        const oldUser = getState().auth.user;
        const user = merge({}, oldUser, {data: {settings}});

        updateUserData(user);

        return dispatch(setUserData(user));
    }
}

/**
 * Remove User Data
 */
export function removeUserData() {
    return {
        type: REMOVE_USER_DATA
    }
}

/**
 * Logout
 */
export function logoutUser() {

    return (dispatch, getState) => {

        const user = getState().auth.user;

        if (!user.role || user.role.length === 0)// is guest
        {
            return null;
        }

        history.push({
            pathname: '/'
        });

        jwtService.logout();

        dispatch(setInitialSettings());

        dispatch({
            type: USER_LOGGED_OUT
        })
    }
}

/**
 * Update User Data
 */
function updateUserData(user) {
    if (!user.role || user.role.length === 0)// is guest
    {
        return;
    }

    jwtService.updateUserData(user)
        .then(() => {
            store.dispatch(Actions.showMessage({message: "User data saved with api"}));
        })
        .catch(error => {
            store.dispatch(Actions.showMessage({message: error.message}));
        });
}
