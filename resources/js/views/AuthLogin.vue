<template>
  <div class="container">
    <div class="alert alert-danger" v-if="error">
      <p>There was an error, unable to sign in with those credentials.</p>
    </div>
    <form autocomplete="off" @submit.prevent="submitLogin" method="post">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="user@example.com"
          v-model="form.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" v-model="form.password" required />
      </div>
      <button type="submit" class="btn btn-default">Sign in</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        rememberMe: false
      },
      authError: false,
      submitted: false
    };
  },
  computed: {
    ...mapState("account", ["status"])
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    submitLogin: e => {
      console.log(e);
      this.submitted = true;
      const { form } = this;
      if (form.email && form.password) {
        let username = form.email;
        let password = form.password;
        this.login({ username, password });
      }
    }
  }
};
</script>

<style>
</style>