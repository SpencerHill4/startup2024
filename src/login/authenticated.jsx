import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {

      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
        navigate('/');
      });
  }

  return (
    <div className='authenticated-container'>
      <div 
        className={`playerName ${dropdownOpen ? 'active' : ''}`} 
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {props.userName}
      </div>
      {dropdownOpen && (
        <div className='dropdown'>
          <a href='#' onClick={() => navigate('/profile')}>Profile</a>
          <a href='#' onClick={logout}>Logout</a>
        </div>
      )}
    </div>
  );
}
