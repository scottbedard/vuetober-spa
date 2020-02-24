import axios from 'axios'

export default ({
    state: {
        posts: []
    },
    mutations: {
        posts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        getPosts({commit}) {
            let posts = [];

            axios.get('/api/v1/blog').then((response) => {
                posts = response.data.data;
                commit('posts', posts);
            });
        }
    },
    modules: {}
})

