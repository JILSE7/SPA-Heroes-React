import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const DcScreen = () => {
    return (
        <>
            <h1  className="text-center mb-3">Dc Screen</h1>
            <HeroeList publisher="DC Comics"/>
        </>
    )
}
