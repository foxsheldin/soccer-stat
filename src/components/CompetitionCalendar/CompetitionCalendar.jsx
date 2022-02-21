import React from 'react';
import './style.scss';
import PreLoader from "../common/PreLoader/PreLoader";
import TableForMatches from '../common/TableForMatches/TableForMatches';

const CompetitionCalendar = (props) => {
    return <main className='main-competition-calendar'>
        <div className='main-wrapper'>
            <div className='calendar-list-table'>
                <h1 className='visually-hidden'>Календарь лиги</h1>
                {props.countMatches !== null ?
                    props.countMatches ? <TableForMatches {...props} /> : 'Нет существующих игр'
                    : <PreLoader />}
            </div>
        </div>
    </main>;
};

export default CompetitionCalendar;
