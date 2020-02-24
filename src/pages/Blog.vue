<template>
    <div class="about">
        <h1>This is a blog page</h1>

        <h3>Posts</h3>
        <div v-for="(post,key) in posts" :key="key">
            <Post :post="post"></Post>
            <br/>
            <br/>
            <br/>
        </div>

    </div>
</template>
<script>
    import Post from "../components/Post";
    import {mapState} from 'vuex';

    export default {
        components: {Post},
        data() {
            return {
                //
            }
        },
        created() {
            this.$store.dispatch('getPosts');
        },
        computed: mapState({
            posts: state => state.blog.posts
        })

    }
</script>
