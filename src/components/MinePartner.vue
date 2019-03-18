<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>我的联系合伙人
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
    <div class="mine-partner-top">
      <p>联系合伙人：林嘉</p>
      <p>职位：律师</p>
      <p>手机：18888888888</p>
      <p>邮箱：panyujia@kwm.com</p>
      <p>座机：010-88888888</p>
    </div>
    <div class="mine-partner-botttom">
      <p>VIP全称：北京XX科技有限公司</p>
      <p>VIP简称：XX科技</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine-partner"
};
</script>
<style>
.mine-partner-top {
  background-color: #fff;
  padding: 0 40px;
  margin-bottom: 10px;
}
.mine-partner-top p {
  line-height: 60px;
  font-size: 27px;
  color: #676578;
}
.mine-partner-botttom {
  background-color: #fff;
  padding: 47px 40px;
}
.mine-partner-botttom p {
  font-size: 30px;
  color: #2d2d41;
  line-height: 60px;
}
</style>
