<template>
  <div v-if="posts.length" class="home-posts">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/welcome/project/${post.id}`">{{post.title}}</router-link>
        <p>{{post.content}}</p>
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
        <button>未接洽</button>
      </li>
    </ul>
  </div>
  <div v-else>请稍等..</div>
</template>
<script>
export default {
  name: "HomePosts",
  data: () => ({}),
  created() {
    this.getPosts(this.tab);
  },
  methods: {
    getPosts(tab) {
      this.$store.dispatch("getPosts", tab);
    }
  },

  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    tab() {
      const { type } = this.$route.params;
      return type ? type : "newest";
    }
  }
  // watch: {
  //   "$route.params.type"() {
  //     this.getHomePosts();
  //   }
  // }
};
</script>
<style >
.home-posts {
  width: 750px;

  background-color: #fff;
}
.home-posts ul {
  width: 750px;
}
.home-posts > ul li {
  padding: 0 40px;
  position: relative;
  border-top: 2px solid #f2f2f2;
  border-bottom: 2px solid #f2f2f2;
  padding-bottom: 44px;
}
.home-posts > ul li a {
  display: block;
  font-size: 30px;
  color: #2d2d41;
  margin-top: 50px;
}
.home-posts > ul li p {
  margin-top: 40px;
  line-height: 41px;
  font-size: 26px;
  color: #979797;
}
.home-posts > ul li p i {
  font-size: 29px;
  margin-right: 10px;
}
.home-posts > ul li p span {
  margin-right: 15px;
}
.home-posts > ul li button {
  width: 120px;
  line-height: 50px;
  font-size: 26px;
  position: absolute;
  right: 40px;
  bottom: 32px;
  background-color: #007bff;
  color: #fff;
}
</style>