import { WORDS_COUNT } from '../constants/constants';
import { getRandomIndexInRange } from '../helpers';
import { words } from '../data/data';

const getWords = () => {
    const index = getRandomIndexInRange(WORDS_COUNT);
    return [...words[index]];
};

export { getWords };
