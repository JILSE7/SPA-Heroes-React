import React from 'react'
import {Route, Redirect } from 'react-router'
import PropTypes from 'prop-types'


export const PrivateRoute = ({
    isAunthenticated,
    component: Component,
    ...rest

}) => {

    console.log(`${rest.location.pathname}${rest.location.search}`);
    localStorage.setItem('laspath', `${rest.location.pathname}${rest.location.search}`)

    return (
        <Route {...rest} 
                component={(props)=>( isAunthenticated ? (<Component {...props}/>) :  (<Redirect to="/login"/> ) )}
        />
            
        
    )
}


PrivateRoute.propType = {
    isAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
