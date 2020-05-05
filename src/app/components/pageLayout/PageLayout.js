import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import Loading from "../Loading";

const useStyles = makeStyles(theme => ({
    page: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
    },
    pageInnerScroll: {
        overflow: 'hidden'
    },
    content: {
        padding: 25,
        display: 'flex',
        width: '100%'
    },
    contentInnerScroll: {
        overflow: 'hidden',
        height: '100%',
    },
    userContent: {
        maxWidth: 1380
    },
    formContent: {
        maxWidth: 930
    },
    maxContent: {
        maxWidth: 1920
    },
    centerContent: {
        margin: '0 auto'
    },
    pageCenter: {
        justifyContent: 'center'
    },
    fullheight: {
        flex: 1
    },
    header: {
        padding: 25,
        backgroundColor: theme.palette.primary.dark,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
        minHeight: 80
    }
}));

function PageLayout(props) {

    const classes = useStyles(props);

    if (props.load) return <Loading/>;

    return (
        <div className={ clsx(
            classes.page,
            props.innerScroll && classes.pageInnerScroll,
            props.pageCenter && classes.pageCenter,
            props.bgCard && 'bg-card',
        ) }>
            {
                props.header && (
                    <div className={ classes.header }>
                        { props.header }
                    </div>
                )
            }
            <div
                className={
                    clsx(
                        classes.content,
                        props.innerScroll && classes.contentInnerScroll,
                        props.userContent && classes.userContent,
                        props.formContent && classes.formContent,
                        props.maxContent && classes.maxContent,
                        props.centerContent && classes.centerContent,
                        props.fullheight && classes.fullheight,
                    )
                }
            >
                { props.content }
            </div>
        </div>
    )
}

export default PageLayout;