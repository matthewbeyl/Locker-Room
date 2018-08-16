import axios from 'axios';

export function getTightends() {
    // console.log('works');
    return axios.get('/api/template/TE')
    .then(response => {
        // console.log(response.data.Players);
        return response.data})
    .catch((error) => { throw error; });
}