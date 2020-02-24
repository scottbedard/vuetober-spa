<template>
    <nav>
        <!-- home -->
        <router-link
            class="no-underline text-grey-darker transition-color hover:text-grey-darkest"
            :to="{ name: 'home' }">
            Home
        </router-link>

        <!-- Ajax -->
        <router-link
            class="ml-8 no-underline text-grey-darker transition-color hover:text-grey-darkest"
            :to="{ name: 'blog' }">
            Blog
        </router-link>

        <!-- about -->
        <router-link
            class="ml-8 no-underline text-grey-darker transition-color hover:text-grey-darkest"
            :to="{ name: 'components' }">
            Components
        </router-link>

        <template v-if="!isLoggedIn">
            <!-- signin -->
            <router-link
                class="ml-8 no-underline text-grey-darker transition-color hover:text-grey-darkest"
                :to="{ name: 'signin' }">
                SignIn
            </router-link>

            <!-- Register -->
            <router-link
                class="ml-8 no-underline text-grey-darker transition-color hover:text-grey-darkest"
                :to="{ name: 'register' }">
                Register
            </router-link>
        </template>
        <template v-else>
            <!-- Register -->
            <a
                class="ml-8 no-underline text-grey-darker transition-color hover:text-grey-darkest cursor-pointer"
                @click="logout()">
                Logout
            </a>
        </template>
    </nav>
</template>

<script>
    export default {
        computed : {
            isLoggedIn : function(){ return this.$store.getters['user/isLoggedIn']}
        },
        methods: {
            logout: function () {
                this.$store.dispatch('user/logout')
                    .then(() => {
                        this.$store.state.blog.posts = [];
                        this.$router.push('/signin')
                    })
            }
        },
    }
</script>
