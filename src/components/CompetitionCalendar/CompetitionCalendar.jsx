import React from 'react';
import { Link } from 'react-router-dom';
import CalendarContainer from '../common/Calendar/CalendarContainer';

const CompetitionCalendar = (props) => {
    return <main className='main-competition-calendar'>
        <div className='main-wrapper'>
            <div className='breadcrumbs'>
                <Link to={'/competitions'}>Лиги</Link>
                <span> > {props.nameCompetition}</span>
            </div>
            <CalendarContainer {...props} />
        </div>
    </main>;
};

export default CompetitionCalendar;
