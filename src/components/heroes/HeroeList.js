import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import {getHeroesByPublisher}  from '../../selectors/getHeroesByPublisher'
import { CardHero } from './CardHero';



export const HeroeList = ({publisher}) => {

   
    // const heroes = getHeroesByPublisher(publisher)
     //Use memo no renderizar el componente a menos que cambiemos de familia
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])


    return (
        <div className="cards">
           {heroes.map(hero =>(
               <Link to={`./hero/${hero.id}`}>
                    <CardHero key={hero.id} {...hero} className="animate__animated animate__bounce"/>
               </Link>
           ))} 
        </div>
    )
}
