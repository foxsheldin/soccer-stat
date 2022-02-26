import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import PreLoader from '../PreLoader/PreLoader'
import TableForMatches from '../TableForMatches/TableForMatches'

const Calendar = (props) => {
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
        } else {
            getData();
        }
    }

    return (
        <div className='calendar-list'>
            <h1>Матчи</h1>
            <div className='calendar-list-filter'>
                c <input type='date' className='filter-date'
                    onChange={handleDateFromChange} onBlur={handleDateFromChange}
                    value={dateFrom} max={dateTo} />
                по <input type='date' className='filter-date'
                    onChange={handleDateToChange} onBlur={handleDateToChange}
                    value={dateTo} min={dateFrom} />
            </div>
            {props.countMatches !== null ?
                props.countMatches ?
                    <>
                        <TableForMatches matches={data ?? props.matches}
                            handlePageClick={handlePageClick}
                            pageCount={pageCount}
                        />
                        <div className='pagination-list'>
                            <ReactPaginate
                                previousLabel={"<-"}
                                nextLabel={"->"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div>
                    </>
                : 'Нет существующих игр'
            : <PreLoader />}
        </div>
    )
}

export default Calendar