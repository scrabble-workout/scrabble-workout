import { getCorrectWords } from '../../service/service';

export const LOAD_GAME = 'LOAD_GAME';

export const loadWords = () => ({
    type: LOAD_GAME,
    correctWords: getCorrectWords(),
});
