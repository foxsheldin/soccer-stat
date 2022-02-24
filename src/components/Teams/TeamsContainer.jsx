import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Teams from './Teams';
import { getTeams } from '../../redux/teams-reducer';
import { useParams } from 'react-router-dom';

const TeamsContainer = (props) => {
  const {page} = useParams();
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    props.getTeams();
  }, []);
  
  const onSearchChange = (event) => {
    const regExpValue = new RegExp(`${event.target.value}`,'i');
    setTeams(props.teams.filter((team) => team.name.match(regExpValue)));
  }

  return <Teams teams={teams ?? props.teams} count={props.countTeams} onSearchChange={onSearchChange}/>;
};

const mapStateToProps = (state) => {
  return {
    teams: state.teamsState.teams,
    countTeams: state.teamsState.countTeams,
  }
}

export default connect(mapStateToProps, { getTeams })(TeamsContainer);
