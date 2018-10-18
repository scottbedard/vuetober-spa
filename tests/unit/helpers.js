import Vue from 'vue';
import modules from '@/app/store';
import routes from '@/app/routes';
import { factory as spyfuVueFactory } from 'spyfu-vue-factory';

//
// create a vue factory
//
window.factory = function factory(options = {}) {
    return spyfuVueFactory({
        Vue,
        modules,
        routes,
        ...options,
    });
}

//
// default mount function
//
window.mount = factory();
