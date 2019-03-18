<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>我的分享
      </p>
      <ul>
        <li :style="{borderRight:'1px solid #ccc'}">
          <i class="icon-alimore"></i>
        </li>
        <li style="borderLeft:1px solid #ccc">
          <i class="icon-alibaxin"></i>
        </li>
      </ul>
    </header>
    <div v-if="posts.length" class="mine-share">
      <ul v-for="post in posts" :key="post.id">
        <li>
          <h3>{{post.title}}</h3>
          <p>
            <span>分享时间：</span>
            <span>2018-12-19 18：04</span>
          </p>
          <p>
            <span>分享地址：</span>
            <span>https://www.baidu.com/</span>
          </p>
          <p>
            <span>密码：</span>
            <span>3909</span>
          </p>
          <button @click="share">终止分享</button>
        </li>
      </ul>
    </div>
    <div v-else>请添加项目</div>
  </div>
</template>
<script>
export default {
  name: "mine-share",
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  created() {
    this.$store.dispatch("getProjectPosts");
  },
  methods: {
    share() {
      this.$messagebox
        .confirm("", {
          title: "提示",
          message: "终止分享后将不能通过分享链接查看此项目是否确定终止此分享。",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
        .then(() => {})
        .catch(() => {});
    }
  }
};
</script>
<style >
.mine-share h3 {
  padding-top: 46px;
  font-size: 33p;
  color: #2d2d41;
  margin-left: 60px;
}
.mine-share ul {
  background-color: #fff;
}
.mine-share ul li {
  margin-bottom: 28px;
  position: relative;
}
.mine-share ul li p {
  display: flex;
  margin-top: 28px;
}
.mine-share ul li p > span:first-child {
  text-align: right;
  width: 200px;
  font-size: 28px;
  color: #2d2d41;
}
.mine-share ul li p > span:last-child {
  color: #979797;
  font-size: 26px;
  flex-grow: 1;
  margin-left: 24px;
}
.mine-share ul li button {
  font-size: 27px;
  text-align: center;
  border-radius: 7px;
  width: 160px;
  background-color: #007bff;
  color: #fff;
  line-height: 60px;
  position: absolute;
  bottom: 30px;
  right: 40px;
}
.mint-msgbox-title {
  font-size: 28px;
}
</style>