import axios from 'axios';

const KEY = 'AIzaSyCzPZNt4f-pDXGwpommcCQEAWlZAGT542M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

