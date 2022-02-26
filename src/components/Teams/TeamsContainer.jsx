import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Teams from './Teams';
import { getTeams } from '../../redux/teams-reducer';
import { useParams } from 'react-router-dom';

const TeamsContainer = (props) => {
  const [teams, setTeams] = useState(null);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(9);
  const [pageCount, setPageCount] = useState(0);
  
  const getData = () => {
    setTeams(props.teams.slice(offset * perPage, (offset + 1) * perPage));
    setPageCount(Math.ceil(props.teams.length / perPage));
  }

  useEffect(() => {
    props.getTeams();
  }, []);

  useEffect(() => {
    getData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  }
  
  const onSearchChange = (event) => {
    if (event.target.value) {
      const regExpValue = new RegExp(`${event.target.value}`,'i');
      setTeams(props.teams.filter((team) => team.name.match(regExpValue)).slice(0, perPage));
    } else {
      getData();
    }
  }

  return <Teams teams={teams ?? props.teams} count={props.countTeams} 
                onSearchChange={onSearchChange}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
                />;
};

const mapStateToProps = (state) => {
  return {
    teams: state.teamsState.teams,
    countTeams: state.teamsState.countTeams,
  }
}

export default connect(mapStateToProps, { getTeams })(TeamsContainer);
