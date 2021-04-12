import React from 'react'
import { HeroeList } from '../heroes/HeroeList'


export const MarvelScreen = ({publisher}) => {

    return (
        <>
            <h1 className="text-center mb-3">Marvel Screen</h1>
            <HeroeList publisher="Marvel Comics"/>

        </>
    )
}
