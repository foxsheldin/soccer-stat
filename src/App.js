import React from 'react';
import { Routes, Route } from 'react-router-dom';
/* import './App.css'; */
import PageLayout from './components/common/PageLayout/PageLayout';
import CompetitionsContainer from './components/Competitions/CompetitionsContainer';
import TeamsContainer from './components/Teams/TeamsContainer';
import TeamCalendarContainer from './components/TeamCalendar/TeamCalendarContainer';
import CompetitionCalendarContainer from './components/CompetitionCalendar/CompetitionCalendarContainer';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLayout />} >
          <Route path='/competitions' element={<CompetitionsContainer />} />
          <Route path='/teams' element={<TeamsContainer />} />
          <Route path='/teams/:teamid' element={<TeamCalendarContainer />} />
          <Route path='/competition-calendar' element={<CompetitionCalendarContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
