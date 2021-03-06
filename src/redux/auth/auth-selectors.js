const getAuthToken = state => Boolean(state.auth.token);

const getAuthEmail = state => state.auth.user.email;

export default {
    getAuthToken,
    getAuthEmail
}