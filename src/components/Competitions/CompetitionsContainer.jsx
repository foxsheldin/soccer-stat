import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import { getCompetitions } from '../../redux/competitions-reducer';

const CompetitionsContainer = React.memo((props) => {
  useEffect(() => {
    props.getCompetitions();
  }, []);

  return <Competitions competitions={props.competitions} count={props.count}/>;
});

const mapStateToProps = (state) => {
  return {
    competitions: state.competitionsState.competitions,
    count: state.competitionsState.countCompetitions
  }
}

export default connect(mapStateToProps, { getCompetitions })(CompetitionsContainer);
