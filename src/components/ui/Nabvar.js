import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Nabvar = () => {
    const {user:{name}, dispatch} = useContext(AuthContext);
    //history hook
    const history = useHistory();
    const handleLogOut = ()=>{
        const action = {
            type: types.logout
        }
        dispatch(action);

        console.log(history);
        history.replace('/login');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
        <li className="navbar-brand text-info" > Asociaciones </li>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel"> Marvel </NavLink>

                <NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc"> DC </NavLink>
                <NavLink activeClassName="active"className="nav-item nav-link" exact to="/search" >Search</NavLink>
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
            <ul className="navbar-nav ml-auto d-flex justify-content-end">
                <li className="d-block m-auto nav-item nav-link  text-info text-capitalize">{name}</li>
                <button className="nav-item nav-link btn" onClick={handleLogOut} > Logout </button>
            </ul>
        </div>
    </nav>
    )
}
