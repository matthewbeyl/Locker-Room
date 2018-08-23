import axios from 'axios';

export function getUserTeam() {
    return axios.get('/api/template/userteam').then(response =>{
        return response.data
    })
    .catch((error) => { throw error; });
}
