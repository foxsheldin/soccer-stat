import React from 'react';
import { Link } from 'react-router-dom';
import PreLoader from '../common/PreLoader/PreLoader';
import './style.css';

const CompetitionsItem = (props) => {
  const addCodeLink = props.code??props.id
  const startDate = props.currentSeason !== null ? props.currentSeason.startDate : 'N/A';
  const endDate = props.currentSeason !== null ? props.currentSeason.endDate : 'N/A';
  return (
    <tr>
      <td><Link to={'/competitions/'+addCodeLink+'/teams'}>{props.name}</Link></td>
      <td><Link to={'/competitions/'+addCodeLink+'/teams'}>{startDate}</Link></td>
      <td><Link to={'/competitions/'+addCodeLink+'/teams'}>{endDate}</Link></td>
    </tr>
  );
}

const Competitions = (props) => {
  const competitionsElements = (competitions) => {
    return competitions.map((each) => <CompetitionsItem {...each} />)
  }
  
  return <main className='main-competitions'>
    <div className='main-competitions__wrapper'>
      <h3>Лиги</h3>
      {props.count !== null ?
          <table className='main-competitions__table'>
            <thead>
              <tr>
                <th rowSpan={2}>Наименование лиги/соревнования</th>
                <th colSpan={2}>Период сезона</th>
              </tr>
              <tr>
                <th>Начало</th>
                <th>Конец</th>
              </tr>
            </thead>
            <tbody>
              {competitionsElements(props.competitions)}
            </tbody>
          </table>

      : <PreLoader />}

    </div>
  </main>;
};

/* : <span style={{color: 'red'}}>Неудалось получить данные с сервера. Попробуйте позже</span>} */
export default Competitions;
