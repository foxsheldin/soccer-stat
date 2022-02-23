import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Teams from './Teams';
import { getTeams } from '../../redux/teams-reducer';
import { useParams } from 'react-router-dom';

const TeamsContainer = (props) => {
  const {page} = useParams();

  useEffect(() => {
    props.getTeams();
  }, []);
  
  const onSearchChange = () => {
    console.log('searchChanged');
  }

  return <Teams teams={props.teams} count={props.countTeams} onSearchChange={onSearchChange}/>;
};

const mapStateToProps = (state) => {
  return {
    teams: state.teamsState.teams,
    countTeams: state.teamsState.countTeams,
  }
}

export default connect(mapStateToProps, { getTeams })(TeamsContainer);
