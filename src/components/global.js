import collapseTransitionComponent from './transitions/collapse.vue';
import fadeTransitionComponent from './transitions/fade.vue';
import inputComponent from './ui/input.vue';
import marginComponent from './containers/margin.vue';

export default {
    //
    // containers
    //
    'v-margin': marginComponent,

    //
    // transitions
    //
    'v-collapse-transition': collapseTransitionComponent,
    'v-fade-transition': fadeTransitionComponent,

    //
    // ui
    //
    'v-input': inputComponent,
};
