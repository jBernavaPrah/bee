import React from 'react';
import './App.css';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import {Container} from 'reactstrap'
import Dashboard from './Dashboard'
import Home from './Home'
import {Provider} from "react-redux";

import {createStore} from 'redux'
import reducer from '../reducers'
import middleware from '../middlewares'
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(middleware));

export default function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Container className='vh-100'>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                        <Route path="*">
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </Container>
            </Provider>
        </BrowserRouter>
    );
}
