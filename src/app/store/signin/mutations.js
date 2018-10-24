import { assignState, simpleSetters } from 'spyfu-vuex-helpers';
import defaultState from './state';

//
// mutations
//
export default {
    ...simpleSetters({
        setUsername: 'form.username',
        setPassword: 'form.password',
    }),

    // module reset
    reset: assignState(defaultState),
};
