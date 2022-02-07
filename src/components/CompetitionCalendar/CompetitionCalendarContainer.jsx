import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { getMatches } from '../../redux/competitions-reducer';
import CompetitionCalendar from './CompetitionCalendar';
import {getTeams} from "../../redux/teams-reducer";


const CompetitionCalendarContainer = (props) => {
  const {competitionCode} = useParams();
  useEffect(() => {
    props.getMatches(competitionCode);
    props.getTeams(competitionCode);
  },[]);

  return <CompetitionCalendar matches={props.matches} countMatches={props.countMatches}
                              teams={props.teams} countTeams={props.countTeams}/>;
};

const mapStateToProps = (state) => {
  return {
    matches: state.competitionsState.matches,
    countMatches: state.competitionsState.countMatches,
    teams: state.teamsState.teams,
    countTeams: state.teamsState.countTeams,
  }
}

export default compose(
  connect(mapStateToProps, { getMatches, getTeams })
)(CompetitionCalendarContainer);
