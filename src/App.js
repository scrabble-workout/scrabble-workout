import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Game } from './components/Game/Game';

const App = () => {
    return (
        <BrowserRouter basename="/scrabble-workout">
            <div>
                <Header />

                <Route exact path="/" component={Home}/>
                <Route path="/game" component={Game}/>
            </div>
        </BrowserRouter>
    );
};

export { App };
