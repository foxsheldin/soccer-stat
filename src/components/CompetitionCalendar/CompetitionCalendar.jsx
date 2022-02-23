import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Calendar from '../common/Calendar/Calendar';

const CompetitionCalendar = (props) => {
    return <main className='main-competition-calendar'>
        <div className='main-wrapper'>
            <div className='breadcrumbs'>
                <Link to={'/competitions'}>Лиги</Link>
                <span> > {props.nameCompetition}</span>
            </div>
            <Calendar {...props}/>
        </div>
    </main>;
};

export default CompetitionCalendar;
