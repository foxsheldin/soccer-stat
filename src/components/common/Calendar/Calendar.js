import React, { useState } from 'react'
import PreLoader from '../PreLoader/PreLoader'
import TableForMatches from '../TableForMatches/TableForMatches'

const Calendar = (props) => {
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);

    const handleDateFromChange = (event) => {
        setDateFrom(event.target.value);
        updateTable();
    }

    const handleDateToChange = (event) => {
        setDateTo(event.target.value);
        updateTable();
    }

    const updateTable = () => {
        if (dateFrom && dateTo) {
            props.updateMatches(props.teamid??props.competitionCode, dateFrom, dateTo);
        }
    }

    return (
        <div className='calendar-list'>
            <h1>Матчи</h1>
            <div className='calendar-list-filter'>
                c <input type='date' className='filter-date' onChange={handleDateFromChange} value={dateFrom} max={dateTo}/> 
                по <input type='date' className='filter-date' onChange={handleDateToChange} value={dateTo} min={dateFrom}/>
            </div>
            {props.countMatches !== null ?
                props.countMatches ? <TableForMatches {...props} /> : 'Нет существующих игр'
                : <PreLoader />}
        </div>
    )
}

export default Calendar