/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../components/pages/shared/navBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/shared/footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;