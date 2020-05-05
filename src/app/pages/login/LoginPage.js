import React from 'react';
import Content from './components/Content';
import './style/login.scss';
import PageLayout from "../../components/pageLayout/PageLayout";

function LoginPage() {

    return (
        <PageLayout
            content={ <Content/> }
            maxContent
            pageCenter
            centerContent
        />
    );
}

export default LoginPage;
