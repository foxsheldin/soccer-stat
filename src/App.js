import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/common/PageLayout/PageLayout';
import CompetitionsContainer from './components/Competitions/CompetitionsContainer';
import TeamCalendarContainer from './components/TeamCalendar/TeamCalendarContainer';
import CompetitionCalendarContainer from './components/CompetitionCalendar/CompetitionCalendarContainer';
import TeamsContainer from './components/Teams/TeamsContainer';
import './components/common/css/global.scss';
import './components/common/css/variables.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLayout />} >
          <Route path='/competitions' element={<CompetitionsContainer />} />
          <Route path='/teams' element={<TeamsContainer />} />
          <Route path='/team/:teamid' element={<TeamCalendarContainer />} />
          <Route path='/competition/:competitionCode' element={<CompetitionCalendarContainer />} />
          <Route path='*' element={'ERROR 404 "Страница не найдена"'} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
