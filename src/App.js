import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/common/PageLayout/PageLayout';
import CompetitionsContainer from './components/Competitions/CompetitionsContainer';
import TeamCalendarContainer from './components/TeamCalendar/TeamCalendarContainer';
import CompetitionCalendarContainer from './components/CompetitionCalendar/CompetitionCalendarContainer';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLayout />} >
          <Route path='/competitions' element={<CompetitionsContainer />} />
          <Route path='/teams/:teamid' element={<TeamCalendarContainer />} />
          <Route path='/competitions/:competitionCode/teams' element={<CompetitionCalendarContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
