import signinComponent from '@/pages/signin/signin.vue';

//
// factory
//
const mount = factory({
    components: {
        'v-signin': signinComponent,
    },
});

//
// specs
//
describe('signin page', function() {
    it('resets the store on mount', function() {
        let commit;

        vm = mount({
            beforeCreate() {
                commit = stub(this.$store, 'commit');
            },
            template: `<v-signin />`,
        });

        expect(commit).to.have.been.calledWith('signin/reset');
    });

    it('redirects authenticated users to the home page');

    it('syncs the form with vuex state', function() {
        vm = mount({
            template: `<v-signin />`,
        });

        input('Somebody', vm.$el.querySelector('[data-username] input'));
        input('abc123', vm.$el.querySelector('[data-password] input'));

        expect(vm.$store.state.signin.form).to.deep.equal({
            username: 'Somebody',
            password: 'abc123',
        });
    });

    it('logs the user in when the form is submitted');
});
