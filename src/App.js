import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Game } from './components/Game/Game';
import { Result } from './components/Result/Result';

import { loadAllWords } from './store/actions/load-all-words';

export class AppView extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(loadAllWords());
    }

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/game" component={Game} />
                    <Route exact path="/result" component={Result} />
                </div>
            </BrowserRouter>
        );
    }
}

AppView.propTypes = {
    dispatch: PropTypes.func,
};

AppView.defaultProps = {
    dispatch: () => {},
};

const App = connect(null)(AppView);
export { App };
