import React from 'react';
import { Redirect } from 'react-router-dom';
import Utils from '../../@theme/utils';
import authRoles from "../auth/authRoles";

// Pages Config
import { LoginPageConfig } from '../pages/login/LoginPageConfig';
import { DashboardConfig } from '../pages/dashboard/DashboardConfig';

const routeConfigs = [
    LoginPageConfig,
    DashboardConfig,
];

const routes = [
    ...Utils.generateRoutesFromConfigs(routeConfigs, null),
    {
        auth: authRoles.onlyGuest,
        component: () => <Redirect to="/login"/>
    },
];

export default routes;