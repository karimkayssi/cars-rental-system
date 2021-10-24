import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Field, Form, Formik, FormikProps } from 'formik';

const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasAccount, setHasAccount] = useState('');
    const [handleSignUp, setHandleSignUp] = useState('');

    const history = useHistory();

    return (

        <section className="login">
            <form onSubmit={(e) => {
                if (password != confirmPassword) {
                    setPasswordError("Passwords do not match");
                    e.preventDefault();
                    return;
                }
                history.push('/');
            }} className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Email</label>
                <input
                    type="email"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
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
                <label>Re-Enter Password</label>
                <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <br />
                <Button type="submit" variant="contained">SignUp</Button>
                <Link to="/login">
                    <Button variant="text">Click to login</Button>
                </Link>
            </form>
        </section>
    );
};

export default SignUp;