import axios from 'axios';

export function getQuarterbacks() {
    return axios.get('/api/template/QB')
    .then(response => {
        return response.data})
    .catch((error) => { throw error; });
}

export function getRunningbacks() {
    return axios.get('/api/template/RB')
    .then(response => {
        return response.data})
    .catch((error) => { throw error; });
}

export function getWidereceivers() {
    return axios.get('/api/template/WR')
    .then(response => {
        return response.data})
    .catch((error) => { throw error; });
}

export function getTightends() {
    return axios.get('/api/template/TE')
    .then(response => {
        return response.data})
    .catch((error) => { throw error; });
}

export function getKickers() {
    return axios.get('/api/template/K')
    .then(response => {
        return response.data})
    .catch((error) => { throw error; });
}

export function getDefenses() {
    return axios.get('/api/template/DEF')
    .then(response => {
        return response.data})
    .catch((error) => { throw error; });
}