import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../common/Calendar/Calendar';

const TeamCalendar = (props) => {
  return <main className='main-team-calendar'>
    <div className='main-wrapper'>
      <div className='breadcrumbs'>
        <Link to={'/teams'}>Команды</Link>
        <span> > {props.team.name}</span>
      </div>
      {/* <div className='about-team'>
      <div className='team-name team-logo'>
        {props.team.creastUrl ? <img src={props.team.crestUrl} alt={'Логотип '+props.team.name} className='logo'/> : null}
        <span className='name'>{props.team.name}</span>
      </div>
      <div className='team-contacts'>
        {props.team.website ? <div className='contacts-website'><a href={props.team.website}>Официальный сайт команды</a></div> : null}
        {props.team.email ? <div className='contacts-email'>Email: {props.team.email}</div> : null}
        {props.team.phone ? <div className='contacts-phone'>Телефон: {props.team.phone}</div> : null}
        {props.team.address ? <div className='contacts-address'>Адрес: {props.team.address}</div> : null}
      </div>
    </div> */}
      <Calendar {...props} />
    </div>
  </main>;
};

export default TeamCalendar;
