import axios from 'axios';

export const GET_ALL_WORDS = 'GET_ALL_WORDS';

const setAllWords = (allWords) => ({
    type: GET_ALL_WORDS,
    allWords,
});

export const getAllWords = () => (dispatch) => {
    axios.get('words.json')
        .then((res) => dispatch(setAllWords(res.data)))
        .catch(() => dispatch(setAllWords(undefined)));
};
