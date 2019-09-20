import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Game } from './components/Game/Game';
import { Result } from './components/Game/Result/Result';

const AppView = ({ words, answer }) => (
    <BrowserRouter basename="/scrabble-workout">
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route
                path="/game/result"
                /* eslint-disable-next-line no-undef,react/jsx-props-no-spreading */
                render={(props) => <Result {...props} words={words} answer={answer} />}
            />
        </div>
    </BrowserRouter>
);

AppView.propTypes = {
    words: PropTypes.array.isRequired,
    answer: PropTypes.string.isRequired,
};

const mapStateToProps = ({ words, answer }) => ({ words, answer });

const App = connect(mapStateToProps)(AppView);
export { App };
