<template>
    <v-margin padded>
        <v-card class="max-w-sm mx-auto" padded>
            <!-- title -->
            <h1 class="font-light mb-4 text-center">
                Register
            </h1>

            <form @submit.prevent="onSubmit">
                <!-- Name -->
                <v-input
                    v-model="name"
                    class="mb-4"
                    data-name
                    icon="text-width"
                    placeholder="Name"
                    type="text"
                />
                <!-- username -->
                <v-input
                    v-model="username"
                    class="mb-4"
                    data-username
                    icon="user"
                    placeholder="Username"
                    type="text"
                />

                <!-- email -->
                <v-input
                    v-model="email"
                    class="mb-4"
                    data-email
                    icon="envelope"
                    placeholder="Email Address"
                    type="email"
                />

                <!-- password -->
                <v-input
                    v-model="password"
                    class="mb-4"
                    data-password
                    icon="key"
                    placeholder="Password"
                    type="password"
                />

                <!-- confirm_password -->
                <v-input
                    v-model="password_confirmation"
                    class="mb-4"
                    data-password
                    icon="key"
                    placeholder="Confirm Password"
                    type="password"
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
    export default {
        mounted() {
            window.localStorage.removeItem('token');
            this.$store.commit('signin/reset');
        },
        computed: {},
        data() {
            return {
                name: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        },
        methods: {
            onSubmit() {
                console.log(this.name);
                this.$store.dispatch('user/register', {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then(() => {
                    // success
                    this.$router.push({name: 'home'});
                }, (err) => {
                    // failed
                    console.log('Authentication failed:', err.response.data);
                });
            },
        },
    };
</script>
