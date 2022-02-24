import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const NavBarContainer = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if (location.pathname === '/' || location.pathname === '/competitions' || location.pathname === '/competitions/') {
            navigate("/competitions/1");
        }
        if (location.pathname==='/teams' || location.pathname==='/teams/') {
            navigate('/teams/1');
          }
    }, [location.pathname]);
    
    return <NavBar />;
});

export default NavBarContainer;
