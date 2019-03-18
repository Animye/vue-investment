<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>所有VIP
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
    <div class="platform">
      <ul>
        <li>
          <router-link to="/welcome/platform/viprule">
            <span>vip规则</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/mine/apply">
            <span>申请vip账号</span>
            <span>></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="platform-vip">
      <ul v-for="vip in vips" :key="vip.id">
        <li>
          <router-link :to="`/welcome/platform/vip/${vip.id}`">{{vip.viptitle}}</router-link>
          <p>
            <span>{{vip.industry}}</span>
          </p>
          <p>{{vip.field}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Platform-vip",
  created() {
    this.$store.dispatch("getVips");
  },
  computed: {
    vips() {
      return this.$store.state.vips.vips;
    }
  }
};
</script>
<style>
.platform-vip {
  background-color: #fff;
}
.platform-vip > ul {
  padding: 0 43px;
  height: 239px;
}
.platform-vip > ul > li {
  display: flex;
  flex-direction: column;
}
.platform-vip > ul > li a {
  font-size: 34px;
  color: #2d2d41;
  margin-top: 45px;
  margin-bottom: 27px;
}
.platform-vip > ul > li p {
  margin-bottom: 32px;
}
</style>
