import axios from 'axios';
// import { getWords } from '../../service/get-words';
import { getRandomIndexInRange } from '../../helpers';
import { WORDS_COUNT } from '../../config/config';

export const INIT_WORDS = 'INIT_WORDS';

const initWordsFromDatabase = (words) => {
    const index = getRandomIndexInRange(WORDS_COUNT);
    return {
        type: INIT_WORDS,
        words: [...words[index]],
    };
};

export const initWords = () => (dispatch) => {
    axios.get('https://scrabble-workout.firebaseio.com/words.json')
        .then((res) => {
            console.log(res.data);
            return dispatch(initWordsFromDatabase(res.data));
        })
        .catch((e) => console.log(e));
};
