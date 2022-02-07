import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const NavBarContainer = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();
    
    if (location.pathname === '/') {
        navigate("/competitions");
    }
    return <NavBar />;
});

export default NavBarContainer;
