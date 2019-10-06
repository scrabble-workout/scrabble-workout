import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://scrabble-workout.firebaseio.com',
});

const httpService = {
    get: () => {
        axiosInstance.get('/words.json')
            .then((res) => res.data)
            .catch(() => undefined);
    },
};

export { httpService };
