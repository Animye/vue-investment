<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <ul>
        <li>
          <router-link to="/">
            <i class="icon-alihome"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/project">
            <i class="icon-alishu"></i>
            <span>项目</span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/platform">
            <i class="icon-alidiannao"></i>
            <span>平台</span>
          </router-link>
        </li>
        <li>
          <router-link to="/welcome/mine">
            <i class="icon-aligeren"></i>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {}
};
</script>

<style >
@import "~@/assets/icon/iconfont.css";
* {
  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  height: 100%;
  padding-bottom: 120px;
  width: 750px;
  background-color: #f8f8f8;
}
header {
  width: 750px;
  background-color: #fff;
  height: 143px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header p button {
  margin-right: 20px;
  font-size: 30px;
}
header p {
  font-size: 32px;
}
header ul {
  width: 167px;
  height: 52px;
  display: flex;
  border: 1px solid #cdcdcd;
  border-radius: 26px;
  align-items: center;
}
header ul li {
  list-style: none;
  height: 32px;
}
header ul li:first-child {
  margin-left: 30px;
}
header ul li > i {
  cursor: pointer;
}
header ul li > .icon-alimore {
  margin-right: 22px;
}
header ul li > .icon-alibaxin {
  margin-left: 22px;
}
/* footer {
  width: 100%;
  height: 120px;
} */
footer > ul {
  width: 750px;
  height: 120px;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  align-items: center;
}
footer > ul > li a {
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #676578;
}
footer > ul > li > a span {
  font-size: 25px;
  margin-top: 14px;
}
footer > ul > li .icon-aligeren,
.icon-alidiannao,
.icon-alishu,
.icon-alihome {
  font-size: 50px;
}
/* [class^='icon-ali'],
[class*=' icon-ali'] {
  font-family: 'iconfont' !important;
 
  font-size: 32px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>


