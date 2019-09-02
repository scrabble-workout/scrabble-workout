import { WORDS_COUNT } from '../constants/constants';
import { getRandomIndexInRange } from '../helpers';
import { words } from '../data/data';


const index = getRandomIndexInRange(WORDS_COUNT);
const getCorrectWords = () => words[index];
const getRandomWord = () => words[index][0];

export { getCorrectWords, getRandomWord };
