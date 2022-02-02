import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return <header className='header'>
    <div className='header__wrapper'>
      <NavLink to='/' className='header__logo'>
        SoccerStat
      </NavLink>
      <nav className='header__navbar navbar-list'>
        <NavLink to="/competitions" className='navbar-list__item' activeClassName='navbar-list__item_active'><li >Лиги</li></NavLink>
        <NavLink to="/teams" className='navbar-list__item' activeClassName='navbar-list__item_active'><li>Команды</li></NavLink>
        <NavLink to="/competition-calendar" className='navbar-list__item' activeClassName='navbar-list__item_active'><li>Календарь лиги</li></NavLink>
      </nav>
    </div>
  </header>;
};

export default NavBar;
