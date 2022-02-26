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
      <Calendar {...props} />
    </div>
  </main>;
};

export default TeamCalendar;
