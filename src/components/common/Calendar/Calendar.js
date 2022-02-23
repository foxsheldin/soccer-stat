import React from 'react'
import PreLoader from '../PreLoader/PreLoader'
import TableForMatches from '../TableForMatches/TableForMatches'

const Calendar = (props) => {
    return (
        <div className='calendar-list'>
            <h1>Матчи</h1>
            <div className='calendar-list-filter'>
                c <input type='date' className='filter-date' /> по <input type='date' className='filter-date' />
            </div>
            {props.countMatches !== null ?
                props.countMatches ? <TableForMatches {...props} /> : 'Нет существующих игр'
                : <PreLoader />}
        </div>
    )
}

export default Calendar