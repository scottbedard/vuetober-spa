<template>
    <header class="flex items-center h-16 transition-height md:h-20">
        <v-margin class="flex flex-1 justify-between" padded>

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
            <div class="hidden md:block">
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
