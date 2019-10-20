import {
    LOAD_ALL_WORDS_REQUEST,
    LOAD_ALL_WORDS_SUCCESS,
    LOAD_ALL_WORDS_FAILURE,
} from '../actions/load-all-words';

const initialState = {
    data: [],
    loading: false,
    error: false,
};

const allWordsReducer = (
    state = initialState,
    { type, data: allWords, error },
) => {
    switch (type) {
        case LOAD_ALL_WORDS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOAD_ALL_WORDS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: allWords,
            };
        case LOAD_ALL_WORDS_FAILURE:
            return {
                ...state,
                loading: false,
                error,
                data: allWords,
            };
        default: return state;
    }
};

export { allWordsReducer };
