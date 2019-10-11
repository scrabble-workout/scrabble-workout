import axios from 'axios';

import { getRandomIndexInRange } from '../../helpers';

export const INIT_WORDS = 'INIT_WORDS';

const setWords = (words) => {
    const wordsCount = words.length;
    const index = getRandomIndexInRange(wordsCount);
    return {
        type: INIT_WORDS,
        words: words ? [...words[index]] : [],
    };
};

export const initWords = () => (dispatch) => {
    axios.get('words.json')
        .then((res) => dispatch(setWords(res.data)))
        .catch(() => dispatch(setWords(undefined)));
};
