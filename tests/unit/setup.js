//
// boot up our application
//
import '@/app/boot';

//
// import unit testing helpers
//
import './helpers';

// global vm containers, these will be automatically cleaned up
// and fire their destroy lifecycle hooks to prevent memory leaks
const vms = ['vm' /* 'vm1', 'vm2', etc... */];

//
// global setup
//
beforeEach(function() {
    vms.forEach(name => window[name] = undefined)
});

//
// global teardown
//
afterEach(function() {
    vms.forEach(name => {
        if (window[name] && typeof window[name].$destroy === 'function') {
            window[name].$destroy();
        }
    })
});
