import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarContainer from '../NavBar/NavBarContainer';

const PageLayout = (props) => {
  return <div>
      <NavBarContainer />
      <Outlet />
  </div>;
};

export default PageLayout;
