import axios from 'axios';

export function getRunningbacks() {
    // console.log('works');
    return axios.get('/api/template/RB')
    .then(response => {
        // console.log(response.data.Players);
        return response.data})
    .catch((error) => { throw error; });
}