import axios from 'axios';

export function getKickers() {
    // console.log('works');
    return axios.get('/api/template/K')
    .then(response => {
        // console.log(response.data.Players);
        return response.data})
    .catch((error) => { throw error; });
}