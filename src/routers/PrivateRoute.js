import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return isAuthenticated ? <Component/> : <Navigate to="/login/auth/login" />;
   
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}