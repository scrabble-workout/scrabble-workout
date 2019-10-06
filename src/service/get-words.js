import { httpService } from './http-service';
import { WORDS_COUNT } from '../config/config';
import { getRandomIndexInRange } from '../helpers';

const getWords = async () => {
    const words = await httpService.get();
    const index = getRandomIndexInRange(WORDS_COUNT);
    return [...words[index]];
};

export { getWords };
