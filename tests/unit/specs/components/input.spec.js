//
// specs
//
describe('<v-input>', function() {
    it('renders an input element', function() {
        vm = mount({
            template: `<v-input placeholder="foo" />`,
        });

        expect(vm.$el.tagName).to.equal('INPUT');
        expect(vm.$el.getAttribute('placeholder')).to.equal('foo');
    });

    it('interfaces with v-model', function() {
        vm = mount({
            data() {
                return {
                    value: 'foo',
                };
            },
            template: `<v-input v-model="value" />`,
        });
        
        expect(vm.$el.value).to.equal('foo');

        input('bar', vm.$el);
        
        expect(vm.value).to.equal('bar');
    });
});
