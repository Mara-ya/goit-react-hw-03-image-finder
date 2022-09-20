import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28483703-9dd8ef4760e0b74e4f0efe123';

export const fetchImages = async (search, page) => {
    try {
        const response = await axios.get(
            `?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        return response.data.hits;
    } catch (error) {
        console.log(error)
    }
}