import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Dashboard from './components/Dashboard';
import AddToDo from './components/AddToDo';
import registerServiceWorker from './registerServiceWorker';


const NotFound = () => {
    return (
        <div className='App'>
            <p className='App-intro'>404!</p>
        </div>
    );
}

const routes = (
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/AddToDo" component={AddToDo} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
