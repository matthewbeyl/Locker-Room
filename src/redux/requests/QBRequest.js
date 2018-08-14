import axios from 'axios';

export function getQuarterbacks() {
    console.log('works');
    return axios.get('/api/template').then(response => response.data)
    .catch((error) => { throw error; });
}