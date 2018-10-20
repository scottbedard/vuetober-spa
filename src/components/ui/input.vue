<style lang="scss" scoped>
    input {
        // these selectors aren't standardized, and are buggy when
        // chained together. using this mixin allows us to side
        // step the issue without repeating placeholder css.
        @mixin placeholder {
            color: config('colors.grey-darker');
        }

        &:-ms-input-placeholder { @include placeholder } // <- IE >= 10
        &:-moz-placeholder { @include placeholder } // <- Firefix < 18
        &::-moz-placeholder { @include placeholder } // <- Firefox >= 19
        &::-webkit-input-placeholder { @include placeholder } // <- Chrome, Opera, Safari
    }
</style>

<script>
import { bindAll } from 'spyfu-vue-functional';
import { isFunction } from 'lodash-es';

export default {
    render(h, context) {
        const bindings = bindAll(context);
        const { value } = context.props;

        // interface with v-model
        if (isFunction(context.listeners.input)) {
            bindings.on.input = e => context.listeners.input(e.target.value);
        }

        return <input
            class="p-4 rounded shadow w-full focus:outline-none"
            domPropsValue={value}
            {...bindings}
        />;
    },
    functional: true,
    props: {
        value: {
            default: '',
            type: [Number, String],
        },
    },
};
</script>
