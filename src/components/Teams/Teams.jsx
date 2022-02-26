import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import PreLoader from '../common/PreLoader/PreLoader';
import './style.scss';

const TeamsItem = (props) => {
  const addCodeLink = props.code??props.id;

  return <Link to={`/team/${addCodeLink}`}>
    <div className='teams-list__item'>
      <div className='teams__name'>{props.name}</div>
      <div className='teams__logo'>
        {props.area.crestUrl || props.crestUrl ?
          <img src={props.area.crestUrl ?? props.crestUrl} width='150' height='150' />
        : null}
      </div>
    </div>
  </Link>
}

const teamsElements = (teams) => {
  return teams.map((each) => <TeamsItem {...each} />)
}

const Teams = (props) => {
  return <main className='main-teams'>
    <div className='main-wrapper'>
      <h1 className='visually-hidden'>Лиги</h1>
      <div className='search'>
        <input type='search' className='search__input' placeholder='Поиск команды' onChange={props.onSearchChange} />
      </div>
      {props.count !== null ?
        <>
          <div className='teams-list'>
            {teamsElements(props.teams)}
          </div>
          <div className='pagination-list'>
            <ReactPaginate 
                    previousLabel={"<-"}
                    nextLabel={"->"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={props.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
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

export default Teams;
