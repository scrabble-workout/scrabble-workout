import axios from 'axios';

const get = (url) => axios.get(url)
    .then((res) => res.data)
    .catch(() => undefined);

export const httpService = {
    get,
};
