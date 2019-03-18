<template>
  <div>
    <header>
      <p>我的</p>
      <ul>
        <li :style="{borderRight:'1px solid #ccc'}">
          <i class="icon-alimore"></i>
        </li>
        <li style="borderLeft:1px solid #ccc">
          <i class="icon-alibaxin"></i>
        </li>
      </ul>
    </header>
    <div class="mine">
      <div>
        <h3>刘海涛</h3>
        <p>金杜律师事务所 合伙人</p>
      </div>
      <img src="../assets/hulu.jpeg" alt>
    </div>
    <div class="platform">
      <ul>
        <li>
          <router-link to="/welcome/mine/release">
            <span>发布项目</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/project">
            <span>我的项目</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/project">
            <span>我的收藏</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/mine/share">
            <span>我的分享</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/platform/vip">
            <span>我的VIP</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/mine/partner">
            <span>我的联系合伙人</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/mine/apply">
            <span>申请VIP账号</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/mine/account">
            <span>账户设置</span>
            <span>></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine"
};
</script>
<style>
.mine {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 150px;
  background-color: #fff;
}
.mine > div > h3 {
  margin-bottom: 30px;
  color: #2d2d41;
  font-size: 37px;
  font-weight: normal;
}
.mine > div > p {
  font-size: 28px;
}
.mine > img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
