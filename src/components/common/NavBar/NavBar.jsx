import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = (props) => {
  const setActive = ({isActive}) => isActive ?'navbar-list__item_active navbar-list__item':'navbar-list__item'

  return <header className='header'>
    <div className='header__wrapper'>
      <NavLink to='/' className='header__logo'>
        SoccerStat
      </NavLink>
      <nav className='header__navbar navbar-list'>
        <NavLink to="/competitions" className={setActive}><li >Лиги</li></NavLink>
        <NavLink to="/competitions/PL/teams" className={setActive}><li>Календарь лиги</li></NavLink>
        <NavLink to="/competitions/PL/teams" className={setActive}><li>Команды</li></NavLink>
        <NavLink to="/teams/57" className={setActive}><li>Команда</li></NavLink>
      </nav>
    </div>
  </header>;
};

export default NavBar;
