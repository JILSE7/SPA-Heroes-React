
import React, { useMemo, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { CardHero } from '../heroes/CardHero';

import './form.css'




//quey-string
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchComponent = ({history}) => {

    //Hook de react useLocation
    const location = useLocation();

    //paquete queryString 
    const {q = ""} = queryString.parse(location.search)


    //Estado de la busqueda
    const [search, setsearch] = useState(q);
    
    const handleChange = (e)=>setsearch(e.target.value);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        history.push(`?q=${search}`)
        
        //reseta el search para no dejar la busqueda anterior
        setsearch('')
        // document.querySelector("#form").reset()
    }
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    return (
        <div>
            <h4 className="text-center">Search Screen</h4>
            <hr/>
            <div className="row">
                <div className="d-block m-auto">
                    <form className="form" onSubmit={handleSubmit} id="form" >
                        <input type="text" placeholder="Find your hero" className="form-control" onChange={handleChange} />
                        
                        <button type="submit" className="btn btn-success d-block" >Search</button>
                    </form>
                </div>
                </div>

                { (q === "") &&  <div className="alert alert-info"> Search a Hero </div> }
                { (q !== "" && heroesFiltered.length === 0 ) &&  <div className="alert alert-danger"> Bad Search to {q} </div> }
               
                <div>
                    <h4 className="text-center">Results ({heroesFiltered.length})</h4>
                    <hr/>
                    <div className="space">
                   
                    {heroesFiltered.map(hero => (
                        <Link to={`/hero/${hero.id}`} key={hero.id}>
                            <CardHero key={hero.id} {...hero}/>
                        </Link>
                    ))}
                    </div>
                </div>
         
        </div>
    )
}
