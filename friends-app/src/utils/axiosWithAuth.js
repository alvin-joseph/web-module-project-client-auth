import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    //use window for older browsers

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api'
    });
}