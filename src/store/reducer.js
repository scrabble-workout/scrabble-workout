import * as actionTypes from './types';
import { getCorrectWords } from '../service/service';

const initialState = {
    correctWords: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CORRECT_WORDS:
            const correctWords = getCorrectWords();
            return {
                ...state,
                correctWords,
            };
        default: return state;
    }
};

export { reducer };
