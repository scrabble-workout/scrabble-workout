import { getRandomIndexInRange } from '../../helpers';

export const INIT_WORDS = 'INIT_WORDS';

export const initWords = (allWords) => {
    const wordsCount = allWords.length;
    const index = getRandomIndexInRange(wordsCount);
    return {
        type: INIT_WORDS,
        words: allWords ? [...allWords[index]] : [],
    };
};
