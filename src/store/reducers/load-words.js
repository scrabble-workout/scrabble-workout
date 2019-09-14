import { LOAD_GAME } from '../actions/load-words';

const initialState = {
    correctWords: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAME:
            return {
                ...state,
                correctWords: action.correctWords,
            };
        default: return state;
    }
};

export { reducer };
