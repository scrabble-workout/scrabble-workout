import { httpService } from './http-service';

const urls = {
    allWords: 'words.json',
};

const getAllWords = () => httpService.get(urls.allWords);

export const WordsService = {
    getAllWords,
};
