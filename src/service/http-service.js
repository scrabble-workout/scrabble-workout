import axios from 'axios';

const httpService = {
    getWords() {
        axios.get('words.json')
            .then((res) => res.data)
            .catch(() => undefined);
    },
};

export { httpService };
