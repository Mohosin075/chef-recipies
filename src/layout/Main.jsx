/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../components/pages/shared/navBar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto px-2'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;