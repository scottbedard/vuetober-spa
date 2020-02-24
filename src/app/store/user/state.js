//
// state
//
export default function () {
    return {
        // loading state for authentication requests
        signinIsLoading: false,
        user: JSON.parse(window.localStorage.getItem('user'))
    };
}
