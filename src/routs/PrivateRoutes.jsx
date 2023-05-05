/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    // handle loader
    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children
    }

    console.log(location);
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoutes;