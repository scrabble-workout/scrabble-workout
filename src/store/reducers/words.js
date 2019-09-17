import { INIT_WORDS } from '../actions/init-words';

const initialState = [];

const wordsReducer = (state = initialState, { type, words }) => {
    switch (type) {
        case INIT_WORDS:
            return words;
        default: return state;
    }
};

export { wordsReducer };
