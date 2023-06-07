import axios from 'axios';
const URL = 'https://api-news-fbwj.onrender.com/';
export const getNews = async () => {
    try {
        return await axios.get(`${URL}/news`);
    } catch (error) {
        console.log('Error while calling get news api', error);
    }
}