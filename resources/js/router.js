import Vue from "vue";
import Router from "vue-router";

// import AuthLogin from "./views/AuthLogin.vue";
// import AuthRegister from "./views/AuthRegister.vue";
// import AuthResetLink from "./views/AuthResetLink.vue";
// import AuthResetForm from "./views/AuthResetForm.vue";

// import Post from "./views/Post.vue";
import Home from "./views/Home.vue";
// import Users from "./views/Users.vue";
// import Profile from "./views/Profile.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        // {
        //     path: "/post/{id}",
        //     name: "post",
        //     component: Post
        // },
        // {
        //     path: "/users",
        //     name: "users",
        //     component: Users
        // },
        // {
        //     path: "/profile/{id}",
        //     name: "profile",
        //     component: Profile
        // },
        // {
        //     path: "/login",
        //     name: "auth.login",
        //     component: AuthLogin
        // },
        // {
        //     path: "/register",
        //     name: "auth.register",
        //     component: AuthRegister
        // },
        // {
        //     path: "/password/reset",
        //     name: "auth.reset",
        //     component: AuthResetLink
        // },
        // {
        //     path: "/password/reset/:token",
        //     name: "auth.reset.token",
        //     component: AuthResetForm
        // },
        {
            path: "*",
            redirect: "/"
        }
    ]
});

Vue.router = router;

export default router;
