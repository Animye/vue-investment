<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>投融咨讯
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
    <div class="search">
      <input type="text" placeholder="请输入关键字搜索" class="home-input">
    </div>
    <div class="platform-news">
      <ul v-for=" oneNew in news" :key="oneNew.id">
        <li>
          <img :src="oneNew.newspic" alt :style="{width:'210px',height:'135px'}">

          <router-link :to="`/welcome/platform/news/${oneNew.id}`">
            <span>{{oneNew.newstitle}}</span>
            <span>{{oneNew.newscontent}}</span>
            <span>2018-12-19</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "platform-news",
  created() {
    this.$store.dispatch("getNews");
  },
  computed: {
    news() {
      return this.$store.state.news.news;
    }
  }
};
</script>
<style>
.platform-news > ul {
  background-color: #fff;
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.platform-news > ul > li {
  display: flex;
}
.platform-news > ul > li > a {
  display: flex;
  flex-direction: column;
  color: #2d2d41;
}
</style>
