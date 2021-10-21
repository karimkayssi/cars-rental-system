import React, { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';

import ActionBar from './components/ActionBar';
import Carousel from './components/Carousel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Box, AppBar, Typography, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SignUp from './Signup';
import Car from './Car';

function App() {

  const [expanded, setExpanded] = useState(true);

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  return (
    <Router>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, flex: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/" style={{ flex: 1 }}>
                <Typography variant="h6" component="div">
                  Car Rental System
                </Typography>
              </Link>
              <NavLink to="/login">
                <Button variant="text" color="inherit">Login</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button variant="text" color="inherit">Sign Up</Button>
              </NavLink>
            </Toolbar>
          </AppBar>
        </Box>

        <Switch>
          <Route path="/login">
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={() => { }}
              handleSignUp={() => { }}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          </Route>
          <Route path="/signup">
            <SignUp
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSignUp={() => { }}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
          </Route>
          <Route path="/car/:label">
            <Car />
          </Route>
          <Route path="/">
            <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
              <ActionBar toggle={() => setExpanded(prev => !prev)} isOn={expanded} />
              <div style={{ flex: 1 }}>
                <Carousel expanded={expanded} />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
