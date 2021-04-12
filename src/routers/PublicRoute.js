import React from 'react'
import {Route, Redirect } from 'react-router'
import PropTypes from 'prop-types'


export const PublicRoute = ({
    isAunthenticated,
    component: Component,
    ...rest

}) => {
        
    return (
        <Route {...rest} 
                component={(props)=>( !isAunthenticated ? (<Component {...props}/>) :  (<Redirect to="/marvel"/> ) )}
        />
            
        
    )
}


PublicRoute.propTypes = {
    isAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
