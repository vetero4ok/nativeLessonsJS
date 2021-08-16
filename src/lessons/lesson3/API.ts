import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=f573cf9c';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${key}&s=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${key}&s=${title}&type=${type}`)
    },
    searchFilmByYear: (title: string,year:string)=> {
        return axiosInstance.get(`${key}&s=${title}}&y=${year}`)
    },

};


export default API;
