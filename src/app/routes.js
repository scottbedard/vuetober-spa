import defaultLayoutComponent from '@/layouts/default/default.vue';

export default [

    //
    // default layout
    //
    {
        children: [
            //
            // home
            //
            {
                name: 'home',
                path: '/',
                component: () => import('@/pages/home/home.vue' /* webpackChunkName: "home" */),
            },
        ],
        path: '',
        component: defaultLayoutComponent,
    },
];
