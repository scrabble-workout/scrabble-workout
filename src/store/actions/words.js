import { getWords } from '../../service/service';

export const INIT_WORDS = 'INIT_WORDS';

export const initWords = () => ({
    type: INIT_WORDS,
    words: getWords(),
});
