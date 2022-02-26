import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import { getCompetitions } from '../../redux/competitions-reducer';

const CompetitionsContainer = React.memo((props) => {
  const [competitions, setCompetitions] = useState(null);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(9);
  const [pageCount, setPageCount] = useState(0);

  const getData = () => {
    setCompetitions(props.competitions.slice(offset * perPage, (offset + 1) * perPage));
    setPageCount(Math.ceil(props.competitions.length / perPage));
  }

  useEffect(() => {
    props.getCompetitions();
  }, []);

  useEffect(() => {
    if (props.competitions !== null)
      getData();
  }, [props.competitions]);

  useEffect(() => {
    getData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  }

  const onSearchChange = (event) => {
    if (event.target.value) {
      const regExpValue = new RegExp(`${event.target.value}`, 'i');
      setCompetitions(props.competitions.filter((competition) => competition.name.match(regExpValue)).slice(0, perPage));
    } else {
      getData();
    }
  }

  return <Competitions competitions={competitions} count={props.count}
    onSearchChange={onSearchChange}
    handlePageClick={handlePageClick}
    pageCount={pageCount}
  />;
});

const mapStateToProps = (state) => {
  return {
    competitions: state.competitionsState.competitions,
    count: state.competitionsState.countCompetitions
  }
}

export default connect(mapStateToProps, { getCompetitions })(CompetitionsContainer);
