import { getWords } from '../../service/get-words';

export const INIT_WORDS = 'INIT_WORDS';

export const initWords = () => ({
    type: INIT_WORDS,
    words: getWords(),
});
