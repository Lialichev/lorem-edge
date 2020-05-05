import React, { useEffect } from 'react';
import Content from './components/Content';
import PageLayout from "../../components/pageLayout/PageLayout";
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from "../../store/withReducer";

import './styles/dashboard.scss';

function DashboardApp() {
    const dispatch = useDispatch();

    const data = useSelector(({ dashboardApp }) => dashboardApp.dashboard.data);

    useEffect(() => {
        dispatch(Actions.getDashboardInfo());

        return () => {
            dispatch(Actions.clear());
        }
    }, [dispatch]);

    return (
        <PageLayout
            content={ <Content data={ data } /> }
            maxContent
            centerContent
            fullheight
        />
    );
}

export default withReducer('dashboardApp', reducer)(DashboardApp);