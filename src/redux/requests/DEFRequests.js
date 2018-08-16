import axios from 'axios';

export function getDefenses() {
    return axios.get('/api/template/DEF')
    .then(response => {
        console.log(response.data.Players);
        return response.data})
    .catch((error) => { throw error; });
}