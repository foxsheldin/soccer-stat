import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { getMatches } from '../../redux/competitions-reducer';
import CompetitionCalendar from './CompetitionCalendar';


const CompetitionCalendarContainer = (props) => {
  const {competitionCode} = useParams();
  useEffect(() => {
    props.getMatches(competitionCode);
  },[]);

  return <CompetitionCalendar matches={props.matches} countMatches={props.countMatches} />;
};

const mapStateToProps = (state) => {
  return {
    matches: state.competitionsState.matches,
    countMatches: state.competitionsState.countMatches,
  }
}

export default compose(
  connect(mapStateToProps, { getMatches })
)(CompetitionCalendarContainer);
