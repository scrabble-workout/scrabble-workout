import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import Game from './components/Game/Game';

const App = () => (
    <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
    </div>
);

export { App };
