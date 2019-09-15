import { getCorrectWords } from '../../service/service';

export const INIT_GAME = 'INIT_GAME';

export const initGame = () => ({
    type: INIT_GAME,
    correctWords: getCorrectWords(),
});
