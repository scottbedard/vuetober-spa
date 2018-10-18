<template>
    <div>
        <!-- header -->
        <v-header />
        <router-view />
    </div>
</template>

<script>
import headerComponent from './header/header.vue';

export default {
    components: {
        'v-header': headerComponent,
    },
};
</script>
