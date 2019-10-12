import { GET_ALL_WORDS } from '../actions/get-all-words';

const initialState = [];

const allWordsReducer = (state = initialState, { type, allWords }) => {
    switch (type) {
        case GET_ALL_WORDS:
            return allWords;
        default: return state;
    }
};

export { allWordsReducer };
