import { INIT_GAME } from '../actions/init-game';

const initialState = {
    correctWords: [],
};

const reducer = (state = initialState, { type, correctWords }) => {
    switch (type) {
        case INIT_GAME:
            return {
                ...state,
                correctWords,
            };
        default: return state;
    }
};

export { reducer };
