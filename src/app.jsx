import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { Profile } from './profile/profile';
import { AuthState } from './login/authState';
import { Authenticated } from './login/authenticated';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    function handleLogout() {
      setAuthState(AuthState.Unauthenticated);
      setUserName('');
    }

    return (
      <BrowserRouter>
        <div className='body bg-dark text-light'>
          <header className='container-fluid'>
            <nav className='navbar fixed-top navbar-dark'>
              <div className='navbar-brand'>
                <img src="BlockBonanzaIcon.png"/>
                Block Bonanza
              </div>
              <menu className='navbar-nav'>
                {authState === AuthState.Authenticated && (
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='play'>
                      Play
                    </NavLink>
                  </li>
                )}
                <li className='nav-item'>
                  <NavLink className='nav-link' to='scores'>
                    Scores
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='about'>
                    About
                  </NavLink>
                </li>
                <li className='nav-item' id='login-id'>
                  {authState === AuthState.Authenticated ? (
                    <Authenticated userName={userName} onLogout={handleLogout} />) : (
                      <NavLink className='nav-link' to='/'>
                        Login
                      </NavLink>
                  )}
                </li>
              </menu>
            </nav>
          </header>
    
          <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
              exact
            />
            <Route path='/play' element={<Play />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile' element={<Profile userName={userName} highScore={240} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
    
          <footer className='bg-dark text-white-50'>
            <div className='container-fluid'>
              <span className='text-reset'>Spencer Hill</span>
              <a className='text-reset' href='https://github.com/SpencerHill4/startup2024'>
                Github
              </a>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }