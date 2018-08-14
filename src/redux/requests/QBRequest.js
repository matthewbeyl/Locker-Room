import axios from 'axios';

export function getQuarterbacks() {
    console.log('works');
    return axios.get('/api/template/QB')
    .then(response => {
        console.log(response);
        return response.data})
    .catch((error) => { throw error; });
}