<template>
  <div>
    <header>
      <p>平台</p>
      <ul>
        <li :style="{borderRight:'1px solid #ccc'}">
          <i class="icon-alimore"></i>
        </li>
        <li style="borderLeft:1px solid #ccc">
          <i class="icon-alibaxin"></i>
        </li>
      </ul>
    </header>
    <div class="platform">
      <ul>
        <li>
          <router-link to="/welcome/platform/vip">
            <span>所有VIP</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/platform/news">
            <span>投融资讯</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/platform/about">
            <span>关于平台</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/platform/cooperation">
            <span>合作机构</span>
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/platform/help">
            <span>使用帮助</span>
            <span>></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "platform"
};
</script>
<style>
.platform {
}
.platform > ul {
  background-color: #fff;
  padding: 0 40px;
}
.platform > ul > li {
  line-height: 128px;
}
.platform > ul > li > a {
  display: flex;
  justify-content: space-between;
  font-size: 34px;
  color: #2d2d41;
}
.platform > ul > li + li {
  border-top: 2px solid #f2f2f2;
}
</style>
