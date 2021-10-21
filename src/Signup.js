import { Button } from '@mui/material';
import React, { useState } from 'react';

const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hasAccount, setHasAccount] = useState('');
    const [handleSignUp, setHandleSignUp] = useState('');

    return (
        <section className="login">
            <div className="loginContainer">
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
                <div className="btnContainer">
                    {hasAccount && (
                        <>
                            <button onClick={handleSignUp}>Sign in</button>
                            <p>
                                Don't have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)} >Sign up</span>
                            </p>
                            <button onClick={handleSignUp}>Sign up </button>
                            <p>
                                Have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
                <Button variant="contained">SignUp</Button>
            </div>
        </section>
    );
};

export default SignUp;