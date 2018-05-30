import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


import '../index.css';
import App from '../App';
import Dashboard from '../components/Dashboard';

const NotFound = () => {
    return (
        <div className='App'>
            <p className='App-intro'>404!</p>
        </div>
    );
}

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;