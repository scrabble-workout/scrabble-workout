import { WordsService } from '../../service/get-all-words';

export const GET_ALL_WORDS = 'GET_ALL_WORDS';


const setAllWords = (allWords) => ({
    type: GET_ALL_WORDS,
    allWords,
});

export const getAllWords = () => (dispatch) => {
    WordsService.getAllWords()
        .then((allWords) => dispatch(setAllWords(allWords)))
        .catch(() => dispatch(setAllWords(undefined)));
};
