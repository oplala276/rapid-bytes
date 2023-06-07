import axios from 'axios';
const URL = 'https://news-api-g0c0.onrender.com/';
export const getNews = async () => {
    try {
        return await axios.get(URL)
    } catch (error) {
        console.log('Error while calling get news api', error);
    }
}