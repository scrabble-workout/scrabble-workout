import axios from 'axios';
// import { httpService } from './http-service';
import { WORDS_COUNT } from '../config/config';
import { getRandomIndexInRange } from '../helpers';
// import { words } from '../data/data';

const axiosInstance = axios.create({
    baseURL: 'https://scrabble-workout.firebaseio.com',
});
const getWords = () => {
    const index = getRandomIndexInRange(WORDS_COUNT);
    let words;

    // try {
    //     console.log('getWords');
    //     words = await httpService.get();
    //     console.log(words);
    // } catch (e) {
    //     console.log(e);
    // }
    //
    // return [...words[index]];

    // httpService.get()
    //     .then((res) => {
    //         words = res;
    //         console.log(words);
    //         return [...words[index]];
    //     })
    //     .catch((e) => console.log(e));

    axiosInstance.get('/words.json')
        .then((res) => {
            words = res.data;
            return words;
        })
        .catch(() => {
            words = null;
            return words;
        });

    return [...words[index]];
};

export { getWords };
