import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import PreLoader from '../common/PreLoader/PreLoader';
import './style.scss';

const CompetitionsItem = (props) => {
  const addCodeLink = props.code ?? props.id;

  return <Link to={`/competition/${addCodeLink}`}>
    <div className='competitions-list__item'>
      <div className='competitions__name'>{props.name}</div>
      <div className='competitions__country'>
        {props.area.ensignUrl || props.emblemUrl ?
          <img src={props.area.ensignUrl ?? props.emblemUrl} className='competitions__flag' width='20' height='14' />
          : null}
        <span>{props.area.name}</span>
      </div>
    </div>
  </Link>
}

const competitionsElements = (competitions) => {
  return competitions.map((each) => <CompetitionsItem {...each} />)
}

const Competitions = (props) => {

  return <main className='main-competitions'>
    <div className='main-wrapper'>
      <h1 className='visually-hidden'>Лиги</h1>
      <div className='search'>
        <input type='search' className='search__input' placeholder='Поиск лиги' onChange={props.onSearchChange} />
      </div>
      {props.count !== null ?
        <>
          <div className='competitions-list'>
            {competitionsElements(props.competitions)}
          </div>
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
        : <PreLoader />}
    </div>
  </main>;
};

export default Competitions;
