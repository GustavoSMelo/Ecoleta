import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from '../views/main'
import Registre from '../views/registre'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/registre" component={Registre} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
