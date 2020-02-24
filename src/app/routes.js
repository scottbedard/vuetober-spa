import defaultLayoutComponent from '@/layouts/default/default.vue';

export default [

    {
        children: [
            {
                name: 'components',
                path: '/components',
                component: () => import('@/pages/components/components.vue' /* webpackChunkName: "components" */),
            },
            {
                name: 'home',
                path: '/',
                component: () => import('@/pages/home/home.vue' /* webpackChunkName: "home" */),
            },
            {
                meta: {
                    auth: false,
                },
                name: 'signin',
                path: '/signin',
                component: () => import('@/pages/signin/signin.vue' /* webpackChunkName: "signin" */),
            },
            {
                meta: {
                    auth: false,
                },
                name: 'register',
                path: '/register',
                component: () => import('@/pages/register/register.vue' /* webpackChunkName: "register" */),
            },
            {
                meta: {
                    auth: true,
                },
                name: 'blog',
                path: '/blog',
                component: () => import('@/pages/Blog.vue'),
            },
            {
                meta: {
                    auth: true,
                },
                name: 'logout',
                path: '/logout',
                component: () => import('@/pages/Blog.vue'),
            }
        ],
        path: '',
        component: defaultLayoutComponent,
    },
];
