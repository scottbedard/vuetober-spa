<template>
    <header class="bg-grey-lighter">
        <v-margin class="flex justify-between py-4" padded>

            <!-- logo -->
            <router-link :to="{ name: 'home' }">
                <img
                    alt="Vuetober"
                    class="transition-width w-24 md:w-36"
                    data-logo
                    src="./logo.png"
                />
            </router-link>

            <!-- mobile nav -->
            <div class="md:hidden">
                <v-mobile-nav />
            </div>

            <!-- desktop nav -->
            <div class="hidden items-center md:flex">
                <v-desktop-nav />
            </div>
        </v-margin>
    </header>
</template>

<script>
import mobileNavComponent from './mobile_nav/mobile_nav.vue';
import desktopNavComponent from './desktop_nav/desktop_nav.vue';

export default {
    components: {
        'v-desktop-nav': desktopNavComponent,
        'v-mobile-nav': mobileNavComponent,
    },
};
</script>
