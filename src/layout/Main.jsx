/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../components/pages/shared/navBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/shared/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

const Main = () => {
    return (
        <div>
            {/* navbar for all routes*/}
            <NavBar></NavBar>
            {/* outlet for main layout */}
            <Outlet></Outlet>
            {/* footer for all section */}
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;