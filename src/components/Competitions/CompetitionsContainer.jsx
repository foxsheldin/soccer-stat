import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Competitions from './Competitions';
import { getCompetitions } from '../../redux/competitions-reducer';
import { useParams } from 'react-router-dom';

const CompetitionsContainer = React.memo((props) => {
  const {page} = useParams();
  const [competitions, setCompetitions] = useState(null);

  useEffect(() => {
    props.getCompetitions();
  }, []);

  const onSearchChange = (event) => {
    const regExpValue = new RegExp(`${event.target.value}`,'i');
    setCompetitions(props.competitions.filter((competition) => competition.name.match(regExpValue)));
  }

  return <Competitions competitions={competitions ?? props.competitions} count={props.count} onSearchChange={onSearchChange}/>;
});

const mapStateToProps = (state) => {
  return {
    competitions: state.competitionsState.competitions,
    count: state.competitionsState.countCompetitions
  }
}

export default connect(mapStateToProps, { getCompetitions })(CompetitionsContainer);
