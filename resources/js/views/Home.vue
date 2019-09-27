<template>
  <div>
    <div class="container header_body">
      <div class="row">
        <h1>Encuentra tu plato</h1>
      </div>
    </div>
    <div class="new_posts">
      <PostList list="{app.new_posts}"></PostList>
    </div>
    <div class="top_rated">
      <PostList list="{app.top_posts}"></PostList>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";

export default {
  data() {
    return {
      user: {},
      new_posts: {},
      top_posts: {}
    };
  },
  components: { PostList },
  mounted() {
    console.log("mounted homevue");
    var app = this;
    axios
      .get(axios.defaults.baseUrl + "/welcome/posts")
      .then(function(res) {
        console.log(res);
        top_posts = res.data.top_posts;
        new_posts = res.data.new_posts;
        console.log(app);
        if (res.data.user) {
          this.user = res.data.user;
        }
      })
      .catch(function(err) {
        console.log(err);
        console.log("Not loaded");
      });
  }
};
</script>

<style>
</style>