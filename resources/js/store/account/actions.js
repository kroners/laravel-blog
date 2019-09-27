import { authService } from "../../services/auth.service";

function login({ dispatch, commit }, { username, password }) {
    commit("loginRequest", { username });

    authService.login(username, password).then(
        user => {
            commit("loginSuccess", user);
            router.push("/");
        },
        error => {
            commit("loginFailure", error);
            dispatch("alert/error", error, { root: true });
        }
    );
}

function logout({ commit }) {
    authService.logout();
    commit("logout");
}

function register({ dispatch, commit }, user) {
    commit("registerRequest", user);

    authService.register(user).then(
        user => {
            commit("registerSuccess", user);
            router.push("/login");
            setTimeout(() => {
                // display success message after route change completes
                dispatch("alert/success", "Registration successful", {
                    root: true
                });
            });
        },
        error => {
            commit("registerFailure", error);
            dispatch("alert/error", error, { root: true });
        }
    );
}

export default {
    login,
    logout,
    register
};
