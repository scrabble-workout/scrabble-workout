import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './App';
import { wordsReducer } from './store/reducers/words';
import { answerReducer } from './store/reducers/answer';

const rootReducer = combineReducers({
    words: wordsReducer,
    answer: answerReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        div,
    );
    ReactDOM.unmountComponentAtNode(div);
});
