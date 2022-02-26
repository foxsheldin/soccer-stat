import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { getMatches } from '../../redux/competitions-reducer';
import CompetitionCalendar from './CompetitionCalendar';


const CompetitionCalendarContainer = (props) => {
  const { competitionCode } = useParams();
  useEffect(() => {
    props.getMatches(competitionCode);
  }, []);

  return <CompetitionCalendar nameCompetition={props.nameCompetition} matches={props.matches}
    competitionCode={competitionCode}
    countMatches={props.countMatches} updateMatches={props.getMatches} />;
};

const mapStateToProps = (state) => {
  return {
    nameCompetition: state.competitionsState.name,
    matches: state.competitionsState.matches,
    countMatches: state.competitionsState.countMatches,
  }
}

export default compose(
  connect(mapStateToProps, { getMatches })
)(CompetitionCalendarContainer);
