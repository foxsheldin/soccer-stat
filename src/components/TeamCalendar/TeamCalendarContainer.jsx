import React, { useEffect } from 'react';
import TeamCalendar from './TeamCalendar';
import { connect } from "react-redux";
import { getOneTeam, getTeamMatches } from "../../redux/teams-reducer";
import { useParams } from "react-router-dom";

const TeamCalendarContainer = (props) => {
  const { teamid } = useParams();

  useEffect(() => {
    props.getOneTeam(teamid);
    props.getTeamMatches(teamid);
  }, [])

  return <TeamCalendar teamid={teamid} team={props.team} matches={props.matches}
    countMatches={props.countMatches} updateMatches={props.getTeamMatches} />;
};

const mapStateToProps = (state) => {
  return {
    team: state.teamsState.team,
    matches: state.teamsState.matches,
    countMatches: state.teamsState.countMatches,
  }
}

export default connect(mapStateToProps,
  { getOneTeam, getTeamMatches })(TeamCalendarContainer);
