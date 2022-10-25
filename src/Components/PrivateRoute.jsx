import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute( {children} ) {

    const flag =  sessionStorage.getItem("loggedin");

    return flag ? children : <Navigate to='/login'/>;
 
}
