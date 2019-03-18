<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>咨讯详情
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
    <div v-if="oneNew">
      <h3>{{oneNew.newstitle}}</h3>
      <img :src="oneNew.newspic" alt :style="{width:'100%'}">
      <p>{{oneNew.newscontent}}</p>
    </div>
    <div v-else>请添加详情</div>
  </div>
</template>
<script>
export default {
  name: "platform-news-detail",
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getOneNew", id);
  },
  computed: {
    oneNew() {
      return this.$store.state.news.oneNew;
    }
  }
};
</script>