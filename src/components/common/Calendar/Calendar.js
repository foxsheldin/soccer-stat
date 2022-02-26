import React from 'react'
import ReactPaginate from 'react-paginate';
import PreLoader from '../PreLoader/PreLoader'
import TableForMatches from '../TableForMatches/TableForMatches'

const Calendar = (props) => {
    return (
        <div className='calendar-list'>
            <h1>Матчи</h1>
            <div className='calendar-list-filter'>
                c <input type='date' className='filter-date'
                    onChange={props.handleDateFromChange} onBlur={props.handleDateFromChange}
                    value={props.dateFrom} max={props.dateTo} />
                по <input type='date' className='filter-date'
                    onChange={props.handleDateToChange} onBlur={props.handleDateToChange}
                    value={props.dateTo} min={props.dateFrom} />
            </div>
            {props.countMatches !== null ?
                props.countMatches ?
                    <>
                        <TableForMatches matches={props.matches} />
                        <div className='pagination-list'>
                            <ReactPaginate
                                previousLabel={"<-"}
                                nextLabel={"->"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={props.pageCount}
                                onPageChange={props.handlePageClick}
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