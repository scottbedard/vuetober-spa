<template>
    <div class="post">
        <h3 class="title">{{post.title}}</h3>
        <p class="content">{{post.content}}</p>
        <p>{{post.created_at}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        props: ['post']
    }
</script>

<style lang="scss">
    .post {
        text-align: left;
    }
</style>
