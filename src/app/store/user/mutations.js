import {simpleSetters} from 'spyfu-vuex-helpers';

//
// mutations
//
export default {
    ...simpleSetters({
        setSigninIsLoading: 'signinIsLoading',
    }),
    setToken(state, token) {
        state.token = token;
    },
    setRegisteredUser(state, data) {
        state.user = data;
    },
    auth_success(state, user) {
        state.status = 'success';
        state.user = user
    },
    logout(state, user) {
        state.status = '';
        state.user = ''
    },
};
