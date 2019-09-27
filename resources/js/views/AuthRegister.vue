<template>
  <div class="container">
    <div class="alert alert-danger" v-if="error && !success">
      <p>An error occurr during register.</p>
    </div>
    <form autocomplete="off" @submit.prevent="register" method="post" :action="{actionUrl}">
      <div class="form-group" v-bind:class="{ 'has-error' : error & error.username}">
        <label for="username">Username</label>
        <input type="text" id="username" class="form-control" v-model="form.username" required />
        <span class="help-block" v-if="error && errors.username">{{ errors.username }}</span>
      </div>
      <div class="form-group" v-bind:class="{ 'has-error' : error & error.name}">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control" v-model="form.name" required />
        <span class="help-block" v-if="error && errors.name">{{ errors.name }}</span>
      </div>
      <div class="form-group" v-bind:class="{ 'has-error': error && errors.email }">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="user@example.com"
          v-model="form.email"
          required
        />
        <span class="help-block" v-if="error && errors.email">{{ errors.email }}</span>
      </div>
      <div class="form-group" v-bind:class="{ 'has-error': error && errors.password }">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" v-model="form.password" required />
        <span class="help-block" v-if="error && errors.password">{{ errors.password }}</span>
      </div>
      <div class="form-group" v-bind:class="{ 'has-error': error && errors.password_confirmation }">
        <label for="password_confirmation">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          class="form-control"
          v-model="form.password_confirmation"
          required
        />
        <span
          class="help-block"
          v-if="error && errors.password_confirmation"
        >{{ errors.password_confirmation }}</span>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      is_admin: null,
      error: false,
      errors: {},
      success: false,
      isSending: false,
      actionUrl: axios.defaults.baseUrl + "/auth/register"
    };
  },
  methods: {
    doRegister: async function() {
      console.log("perform register");
      await axios
        .post("/auth/register", {
          params: this.form,
          redirect: false
        })
        .then(response => {
          console.log("register success response");
          console.log(response);
        })
        .catch(error => {
          console.log("register error response");
          console.log(error);
        });
    },
    register: async function() {
      console.log("register form");
      this.isSending = true;
      console.log(this.form);

      await this.doRegister();

      this.isSending = false;
    }
  }
};
</script>

<style>
</style>