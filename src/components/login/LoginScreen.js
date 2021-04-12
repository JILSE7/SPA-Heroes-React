import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './login.css'
export const LoginScreen = ({history}) => {

    const {user,dispatch} = useContext(AuthContext);
    console.log(user);
    const handleLogin = ()=>{
        //History.push('ruta a la que vamos a navegar');
        // history.push('/')

        //lastpath
        const lastPath = localStorage.getItem('laspath') || "/marvel";

        //replace, es igual al push solo que ya no podremos volver a la pagina de donde empezamos a navegar
        
        const action = {type: types.login, 
                        payload: {name: 'Sesion Iniciada'}}

        dispatch(action);
        console.log(lastPath);

        history.replace(lastPath);
        

    }
    return (
        <div className="container mt-5">
          <h1 className="text-center">Heroes App</h1>  

          <img className="gif" src="https://media.giphy.com/media/10bKPDUM5H7m7u/giphy.gif"></img>

          <button className="btn btn-success d-block m-auto" onClick={handleLogin}>Log In</button>
        </div>
    )
}
