<template>
    <v-margin padded>
        <v-card class="max-w-sm mx-auto" padded>
            <!-- title -->
            <h1 class="font-light mb-4 text-center">
                Sign In
            </h1>

            <form @submit.prevent="onSubmit">
                <!-- username -->
                <v-input
                    v-model="username"
                    class="mb-4"
                    data-username
                    icon="user"
                    placeholder="Enter Username"
                />

                <!-- password -->
                <v-input
                    v-model="password"
                    class="mb-4"
                    data-password
                    icon="key"
                    placeholder="Password"
                />

                <!-- submit -->
                <div class="text-right">
                    <v-button type="submit">
                        Submit
                    </v-button>
                </div>
            </form>
        </v-card>
    </v-margin>
</template>

<script>
import { mapTwoWayState } from 'spyfu-vuex-helpers';

export default {
    mounted() {
        // reset the signin store
        this.$store.commit('signin/reset');
    },
    computed: {
        ...mapTwoWayState('signin', {
            username: 'setUsername',
            password: 'setPassword',
        }),
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('user/signin', {
                login: this.username,
                password: this.password,
                remember: false, // <- @todo: support remembered logins
            });
        },
    },
};
</script>
