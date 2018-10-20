<script>
import { bindAll } from 'spyfu-vue-functional';

export default {
    render(h, context) {
        const bindings = bindAll(context);

        return <button
            class="border bg-grey-light cursor-pointer font-bold p-4 rounded text-grey-dark text-sm tracking-wide transition-bg transition-color uppercase hover:bg-grey hover:text-grey-darkest"
            {...bindings}>
            {context.slots().default}
        </button>;
    },
    functional: true,
};
</script>
