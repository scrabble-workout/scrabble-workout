import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://scrabble-workout.firebaseio.com',
});

const httpService = {
    get: () => {
        let data;

        axiosInstance.get('/words.json')
            .then((res) => {
                data = res.data;
                return data;
            })
            .catch(() => {
                data = null;
                return data;
            });
    },
};

export { httpService };
