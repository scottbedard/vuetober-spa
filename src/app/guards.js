// global navigation guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html

import store from "./store";

/**
 * Global before each route guard.
 *
 * @param  {object}     to
 * @param  {object}     from
 * @param  {Function}   next
 * @return {void}
 */
export function beforeEach(to, from, next) {
    // this is a good place to check the user's auth and redirect if necessary

    if (to.meta.auth == true && !window.localStorage.getItem('user')) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        next({
            path: '/signin',
            query: {redirect: to.fullPath}
        })
    }

    next() // make sure to always call next()!

}

/**
 * Global after each route guard.
 *
 * @param  {object}     to
 * @param  {object}     from
 * @return {void}
 */
export function afterEach(/* to, from */) {
    // this is a good place to page views to an analytics platform
}
