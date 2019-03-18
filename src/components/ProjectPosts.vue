<template>
  <div v-if="posts.length" class="home-posts">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/welcome/project/${post.id}`">
          <h3>{{post.title}}</h3>
          <p>{{post.content}}</p>
        </router-link>
        <p>
          <span>
            <i class="icon-alitongxunlu"></i>潘渝嘉
          </span>
          <span>
            <i class="icon-alirili"></i>2018-12-19
          </span>
          <span>
            <i class="icon-aliyanjing"></i>390
          </span>
          <span>
            <i class="icon-alishoucang"></i>390
          </span>
        </p>
        <button>未接洽</button>
      </li>
    </ul>
  </div>
  <div v-else>请稍等..</div>
</template>
<script>
export default {
  name: "project-posts",
  created() {
    this.$store.dispatch("getProjectPosts");
  },
  methods: {},
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  }
};
</script>
<style>
/* .project-posts {
}
.project-posts > ul > li {
  line-height: 126px;
} */
</style>
