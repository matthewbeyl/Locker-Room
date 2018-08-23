import axios from 'axios';

export function getUserTeam() {
    return axios.get('/api/template/userteam').then(response =>{
        console.log('________________');
        
        console.log(response.data);
        console.log('_________________');
        
        return response.data
    })
    .catch((error) => { throw error; });
}
