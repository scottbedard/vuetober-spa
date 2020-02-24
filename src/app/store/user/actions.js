import {postSignin, postRegister, getLogout} from '@/app/repositories/user';

//
// actions
//
export default {
    signin({commit}, payload) {
        commit('setSigninIsLoading', true);

        const request = postSignin(payload);

        request.then((response) => {
            // success
            window.localStorage.setItem('user', JSON.stringify(response.data));
            commit('setToken', response.data);
            commit('auth_success', response.data)
        }, (err) => {
            // failure
            console.error('crap', err);
        }).finally(() => {
            // complete
            commit('setSigninIsLoading', false);
        });

        return request;
    },

    register({commit}, payload) {
        commit('setRegisterIsLoading', true);

        const request = postRegister(payload);

        request.then((response) => {
            // success
            window.localStorage.setItem('registerData', response.data)
            commit('setRegisteredUser', response.data);
            commit('auth_success', response.data)
        }, (err) => {
            // failure
            console.error('crap', err);
        }).finally(() => {
            // complete
            commit('setSigninIsLoading', false);
        });

        return request;
    },

    logout({commit}) {

        const request = getLogout();

        request.then((response) => {

            commit('logout');
            // success
            window.localStorage.removeItem('user');
            return true;
        }, (err) => {
            // failure
            console.error('crap', err);
        }).finally(() => {
            // complete
            commit('setSigninIsLoading', false);
        });


    }
};
