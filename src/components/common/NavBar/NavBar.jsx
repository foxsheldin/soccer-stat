import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavBar = (props) => {
  return <header className='header'>
    <div className='header__wrapper'>
      <NavLink to='/' className='header__logo'>
        SoccerStat
      </NavLink>
      <nav className='header__navbar navbar-list'>
        <NavLink to="/competitions" className='navbar-list__item'><li >Лиги</li></NavLink>
        <NavLink to="/teams" className='navbar-list__item'><li>Команды</li></NavLink>
      </nav>
    </div>
  </header>;
};

export default NavBar;
