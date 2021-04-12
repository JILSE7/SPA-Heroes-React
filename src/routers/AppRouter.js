import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';




export const AppRouter = () => {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <Router>


            <Switch>
                {/* <Route exact path="/login" component={LoginScreen}/> */}
                <PublicRoute path="/login" component={LoginScreen} isAunthenticated={user.logged}/>
                
                {/** no lleva exact porque tiene todas las demas rutas y no podra acceder a ellas */}
                <PrivateRoute isAunthenticated={user.logged}  path="/" component={DashboardRoutes}/>
            </Switch>
        </Router>
    )
}
