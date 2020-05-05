import React from 'react';
import clsx from "clsx";
import { Button, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../../@theme/useForm";
import * as Actions from "../../../auth/store/actions";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: '400px',
        width: '100%',
    },
}));

function DashboardContent() {

    const classes = useStyles();
    const dispatch = useDispatch();

    const error = useSelector(({ auth }) => auth.login.error);

    const { form, handleChange } = useForm({
        email: '',
        password: '',
    });

    function isFormValid() {
        return (
            form.email.length > 0 &&
            form.password.length > 0
        );
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        dispatch(Actions.submitLogin(form));
    }

    return (
        <div className="flex flex-col flex-auto flex-shrink-0 items-center justify-center">

            <div className="flex flex-col items-center justify-center w-full">

                <div className={ clsx(classes.card, 'flex flex-col items-center justify-center p-25 bg-card') }>

                    <Typography
                        variant="body1"
                        color="textSecondary"
                        className="text-18"
                    >
                        Dashboard Login
                    </Typography>

                    <form
                        name="loginForm"
                        noValidate
                        className="flex flex-col justify-center w-full mt-25"
                        onSubmit={ handleSubmit }
                        autoComplete="off"
                    >

                        <TextField
                            className="mb-16"
                            label="Email"
                            error={ Boolean(error) }
                            autoFocus
                            type="email"
                            name="email"
                            value={ form.email }
                            onChange={ handleChange }
                            variant="outlined"
                            color="primary"
                            required
                            fullWidth
                        />

                        <TextField
                            className="mb-16"
                            error={ Boolean(error) }
                            label="Password"
                            type="password"
                            name="password"
                            value={ form.password }
                            onChange={ handleChange }
                            variant="outlined"
                            color="primary"
                            required
                            fullWidth
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            className="w-full mx-auto mt-16"
                            aria-label="LOG IN"
                            disabled={ !isFormValid() }
                            type="submit"
                        >
                            LOGIN
                        </Button>

                    </form>
                </div>

                <div className="text-11 text-white mt-10">
                    v{ process.env.REACT_APP_VERSION }
                </div>

            </div>
        </div>
    );
}

export default DashboardContent;