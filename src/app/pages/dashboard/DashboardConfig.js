import React from "react";
import authRoles from "../../auth/authRoles";

export const DashboardConfig = {
    auth: authRoles.user,
    routes: [
        {
            path: '/dashboard',
            component: React.lazy(() => import('./DashboardApp')),
        },
    ]
};