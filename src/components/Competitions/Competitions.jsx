import React from 'react';
import { Link } from 'react-router-dom';
import PreLoader from '../common/PreLoader/PreLoader';
import './style.scss';

const CompetitionsItem = (props) => {
  const addCodeLink = props.code??props.id;

  return <Link to={`/competition/${addCodeLink}`}>
    <div className='competitions-list__item'>
      <div className='competitions__name'>{props.name}</div>
      <div className='competitions__country'>
        {props.area.ensignUrl || props.emblemUrl ?
          <img src={props.area.ensignUrl ?? props.emblemUrl} className='competitions__flag' width='20' height='14' />
        : null}
        <span>{props.area.name}</span>
      </div>
    </div>
  </Link>
}

const competitionsElements = (competitions) => {
  return competitions.map((each) => <CompetitionsItem {...each} />)
}

const Competitions = (props) => {

  return <main className='main-competitions'>
    <div className='main-wrapper'>
      <h1 className='visually-hidden'>Лиги</h1>
      {props.count !== null ? 
        <div className='competitions-list'>
          {competitionsElements(props.competitions)}
        </div>
      : <PreLoader />}
    </div>
  </main>;
};

export default Competitions;
