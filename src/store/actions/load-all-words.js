import { WordsService } from '../../service/get-all-words';

export const LOAD_ALL_WORDS_REQUEST = 'LOAD_ALL_WORDS_REQUEST';
export const LOAD_ALL_WORDS_SUCCESS = 'LOAD_ALL_WORDS_SUCCESS';
export const LOAD_ALL_WORDS_FAILURE = 'LOAD_ALL_WORDS_FAILURE';


const loadRequest = () => ({
    type: LOAD_ALL_WORDS_REQUEST,
});

const loadSuccess = (allWords) => ({
    type: LOAD_ALL_WORDS_SUCCESS,
    data: allWords,
});

const loadFailure = (error) => ({
    type: LOAD_ALL_WORDS_FAILURE,
    error,
});

export const loadAllWords = () => (dispatch) => {
    dispatch(loadRequest());
    return WordsService.getAllWords()
        .then(
            (allWords) => dispatch(loadSuccess(allWords)),
            (error) => dispatch(loadFailure(error)),
        );
};
