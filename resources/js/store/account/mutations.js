const loginRequest = (state, user) => {
    state.status = { loggingIn: true };
    state.user = user;
};

const loginSuccess = (state, user) => {
    state.status = { loggedIn: true };
    state.user = user;
};

const loginFailure = state => {
    state.status = {};
    state.user = null;
};

const logout = state => {
    state.status = {};
    state.user = null;
};

const registerRequest = (state, user) => {
    state.status = { registering: true };
};

const registerSuccess = (state, user) => {
    state.status = {};
};

const registerFailure = (state, error) => {
    state.status = {};
};
