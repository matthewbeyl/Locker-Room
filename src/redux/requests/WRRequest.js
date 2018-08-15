import axios from 'axios';

export function getWidereceivers() {
    console.log('works');
    return axios.get('/api/template/WR')
    .then(response => {
        console.log(response.data.Players);
        return response.data})
    .catch((error) => { throw error; });
}