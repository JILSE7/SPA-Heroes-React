import React from 'react'

import './cards.css'

//imagenes dinamicas desde src
const images = require.context('../../assets/heroes', true)
// import batman from '../../assets/heroes/dc-batman.jpg'

export let CardHero = ({id, superhero, publisher, alter_ego, first_appearance}) => {
    publisher = publisher.split(" ").splice(0,1);


    return (

 
            <div className="card animate__animated animate__fadeInLeft">
                <div className="information">

                <svg xmlns="http://www.w3.org/2000/svg" className="icon-s" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                    <h4>{superhero}</h4>

                </div>

                <img className="imagen" /*src={`../assets/heroes/${id}.jpg`} */
                    src={images(`./${id}.jpg`).default}
                alt="..." />
                
                <div className="relati">
                    <div className="information-card">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="">{alter_ego}</p>
                    </div>
                    <div className="information-card">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                        <p className="publisher">{publisher}</p>
                    </div>
                    <div className="information-card">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <p className="publisher">{first_appearance}</p>
                    </div>
            
                
                </div>

            </div>

   
                
            
   
    )
}
