<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>vip详情
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
    <div v-if="vip" class="platform-vip-detail">
      <p>VIP全称：{{vip.viptitle}}</p>
      <p>VIP简称：XX科技</p>
      <p>行业：{{vip.industry}}</p>
      <p>地区：{{vip.region}}</p>
      <p>投融资领域：{{vip.field}}</p>
    </div>
    <div v-else>请添加会员信息</div>
    <div class="vip-detail">
      <p>联系人：刘海涛</p>
      <p>职位：律师</p>
      <p>手机：18888888888</p>
      <p>邮箱：panyujia@kwm.com</p>
      <p>座机：010-88888888</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "platform-vip-detail",
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getVip", id);
  },
  computed: {
    vip() {
      return this.$store.state.vips.vip;
    }
  }
};
</script>
<style>
.platform-vip-detail {
  background-color: #fff;
  padding: 0 40px;
}
.platform-vip-detail p {
  background-color: #fff;
  font-size: 28px;
  color: #2d2d41;
  line-height: 60px;
}
.vip-detail {
  padding: 0 40px;
  background-color: #fff;
}
.vip-detail p {
  font-size: 32px;
  line-height: 60px;
  color: #676578;
}
</style>
