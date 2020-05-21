import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Config from './Config'
import TitlePage from "../common/TitlePage";
import Navigation from "../common/Navigation";
import {Container} from 'reactstrap'
import BeePluginActions from "./Email";

function Dashboard() {
    return (
        <div>
            <TitlePage title='Dashboard'/>
        </div>

    )
}

export default function () {
    let {path} = useRouteMatch();

    return (

        <Container>
            <Navigation/>
            <Container>
                <Switch>
                    <Route exact path={path}>
                        <Dashboard/>
                    </Route>
                    <Route path={`${path}/config`}>
                        <Config/>
                    </Route>
                    <Route path={`${path}/email`}>
                        <BeePluginActions/>
                    </Route>
                </Switch>
            </Container>
        </Container>

    )
}