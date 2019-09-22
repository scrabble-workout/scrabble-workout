import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Game } from './components/Game/Game';
import { Result } from './components/Result/Result';

const App = () => (
    <BrowserRouter basename="/scrabble-workout">
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/result" component={Result} />
        </div>
    </BrowserRouter>
);

export { App };
