import { httpService } from './http-service';
import { getRandomIndexInRange } from '../helpers';

const getWords = async () => {
    const words = await httpService.getWords();
    const wordsCount = words.length;
    const index = getRandomIndexInRange(wordsCount);
    return [...words[index]];
};

export { getWords };
