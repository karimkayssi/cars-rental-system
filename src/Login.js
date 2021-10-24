import { Button } from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Field, Form, Formik, FormikProps } from 'formik';

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    const history = useHistory();

    return (
        <section className="login">
            <form className="loginContainer" onSubmit={(e) => {
                history.push('/');
            }}>
                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <br />
                <Button type="submit" variant="contained">Login</Button>
            </form>
        </section>
    );
};

export default Login;