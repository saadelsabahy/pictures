import axios from 'axios';

const key = '1f6096ab60d92936e8931fa26f7a1cc41673658aa53ae53f48807e897fce95ee';
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${key}`,
    },
});
