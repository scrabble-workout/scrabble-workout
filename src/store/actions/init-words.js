import axios from 'axios';

import { getRandomIndexInRange } from '../../helpers';
import { WORDS_COUNT } from '../../config/config';

export const INIT_WORDS = 'INIT_WORDS';

const setWords = (words) => {
    const index = getRandomIndexInRange(WORDS_COUNT);
    return {
        type: INIT_WORDS,
        words: words ? [...words[index]] : [],
    };
};

export const initWords = () => (dispatch) => {
    axios.get('https://scrabble-workout.firebaseio.com/words.json')
        .then((res) => dispatch(setWords(res.data)))
        .catch(() => dispatch(setWords(undefined)));
};
