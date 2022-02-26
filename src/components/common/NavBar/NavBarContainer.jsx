import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const NavBarContainer = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate("/competitions");
        }
    }, [location.pathname]);

    return <NavBar />;
});

export default NavBarContainer;
