import React, { useEffect, useState } from 'react'
import Calendar from './Calendar'

const CalendarContainer = (props) => {
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);

    const [data, setData] = useState(null);
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(15);
    const [pageCount, setPageCount] = useState(0);

    const getData = () => {
        setData(props.matches.slice(offset * perPage, (offset + 1) * perPage));
        setPageCount(Math.ceil(props.matches.length / perPage));
    }

    useEffect(() => {
        if (props.matches !== null)
            getData();
    }, [props.matches])

    useEffect(() => {
        getData();
    }, [offset]);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage);
    }

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
            props.updateMatches(props.teamid ?? props.competitionCode, dateFrom, dateTo);
        } 
        if (!dateFrom && !dateTo) {
            props.updateMatches(props.teamid ?? props.competitionCode);
        }
    }

    return (
        <Calendar matches={data ?? props.matches} 
            countMatches={data ? data.length : props.countMatches}
            handlePageClick={handlePageClick}
            handleDateFromChange={handleDateFromChange}
            handleDateToChange={handleDateToChange}
            dateFrom={dateFrom}
            dateTo={dateTo}
            pageCount={pageCount}
        />
    )
}

export default CalendarContainer