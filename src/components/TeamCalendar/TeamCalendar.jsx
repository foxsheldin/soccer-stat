import React from 'react';
import PreLoader from "../common/PreLoader/PreLoader";
import TableForMatches from '../common/TableForMatches/TableForMatches';

const TeamCalendar = (props) => {
  return <main className='main-team-calendar'>
  <div className='main-team-calendar__wrapper'>
    <div className='about-team'>
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
    </div>
    <div className='calendar-team'>
      <p>Календарь команды</p>
      {props.countMatches !== null ?
          props.countMatches ? <TableForMatches {...props} /> : 'Нет существующих игр'
        : <PreLoader />}
    </div>
  </div>
</main>;
};

export default TeamCalendar;
