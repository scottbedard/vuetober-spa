import axios from 'axios';

/**
 * Authenticate a user.
 *
 * @param  {object} payload
 *         - {string}    login
 *         - {string}    password
 *         - {boolean}   remember
 * @return {Promise}
 */
export function postSignin(payload) {
    return axios.post('/api/rainlab/user/auth/login', payload);
}

export function postRegister(payload) {
    return axios.post('/api/user/users', payload);
}

export function getLogout() {
    return axios.get('/api/rainlab/user/auth/logout');
}
