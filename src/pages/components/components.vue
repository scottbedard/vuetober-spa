<template>
    <v-margin padded>
        <!-- title -->
        <h1 class="font-light mb-4">
            Components
        </h1>

        <p class="font-light mb-8">
            This page is our living component docs.
        </p>

        <!-- filter -->
        <v-input
            v-model="filter"
            class="mb-8"
            placeholder="Filter components..."
        />

        <!-- examples -->
        <div>
            <div 
                v-for="(example, i) in examples"
                :key="example.key">
                <component :is="example.component" />
            </div>
        </div>
    </v-margin>
</template>

<script>
import examples from './examples';

export default {
    data() {
        return {
            filter: '',
        };
    },
    computed: {
        examples() {
            return Object.keys(examples).reduce((acc, key) => acc.concat({ key, component: examples[key] }), []);
        },
    },
};
</script>
