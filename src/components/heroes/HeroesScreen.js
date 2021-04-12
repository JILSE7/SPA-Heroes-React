import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroeById';
import { CardHero } from './CardHero';




export const HeroesScreen = ({history}) => {

    const {heroeId} = useParams();
    //Busqueda por id
    // const hero = [getHeroesById(heroeId)]
    const hero = useMemo(() => [getHeroesById(heroeId)], [heroeId])
    console.log(hero);

    //Extrayendo la familia a la que pertenece
    const family = heroeId.split("-").splice(0,1);

    //Si la url no existe o si por equivocacion pasaron algun paramatro en la url que no existe
    //esto nos siver para que no se quiebre nuestra aplicaccion
        if(!hero){
            //si no existe la url nos retorna a la pagina donde nos encontrabamos
            return <Redirect to={`/${family[0]}`}/>
        };

    const {superhero, publisher, alter_ego, first_appearance} = hero[0];

    //Funcion para retornar a la pagina anterior con validacion
    const handleClick = ()=>{
        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack();
        }
    }


    return (
        <>
        <h1 className="text-center">{}</h1>
            <div className="row mt-5">
                <div className="cards col-7">
                
                    {hero.map(heroe =>(
                        <CardHero key={heroe.id} {...heroe}/>
            
                    ))} 
                </div>

                <div className="col-5 historia mb-5 d-flex flex-column align-items-center animate__animated animate__fadeInRight animate__delay-1s">
                        <h3>{superhero}</h3>

                        <p className="title">Primera Aparicion: <span>{first_appearance}</span></p>
                        <p className="title">Pertenece a la familia: <span>{publisher}</span></p>
                        <p className="title">Nombre de pila: <span>{alter_ego}</span></p>
                        {publisher.includes('Marvel') && (<img src="https://media.giphy.com/media/vBjLa5DQwwxbi/giphy.gif" className="gift"></img>)}
                        {publisher.includes('DC') && (<img src="https://steamuserimages-a.akamaihd.net/ugc/216563764914212087/0D3CE328F7C181CC1FFFED8411A3BBE10F989663/" className="gift"></img>)}

                        <button className="btn btn-outline-dark mt-4" onClick={handleClick}>Return</button>
                
                </div>
            </div>
     
        </>
    )
}
