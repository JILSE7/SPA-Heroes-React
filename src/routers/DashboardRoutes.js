import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchComponent } from '../components/search/SearchComponent'
import { Nabvar } from '../components/ui/Nabvar'

export const DashboardRoutes = () => {
    //rutas hijas que se mostraran despues de ingresar por el login
    //aqui se hace las condiciones de los diferentes redenrerizados

    return (
        <>
            <Nabvar/>
            {/*recomendacion de react, utilizar un div para envolver el router, nota que este funcional component no utliza Router*/}
            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path ="/hero/:heroeId" component = {HeroesScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchComponent}/>
                    
                    <Redirect to="/"/>
                </Switch>
            </div>   
        </>
    )
}
