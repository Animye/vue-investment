<template>
  <div class="home">
    <header>
      <p>首页</p>
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
    <HomeNav/>
    <HomeMain/>
    <HomeProject/>
  </div>
</template>
<script>
import HomeNav from "./HomeNav";
import HomeMain from "./HomeMain";
import HomeProject from "./HomeProject";
export default {
  app: "home",
  components: {
    HomeNav,
    HomeMain,
    HomeProject
  }
};
</script>
<style >
.search {
  text-align: center;
  width: 750px;
  line-height: 110px;
}
.home-input {
  width: 670px;
  line-height: 73px;
  outline: 0;
  font-size: 32px;
  text-indent: 266px;
  background-image: url(../assets/images/放大镜.png);
  background-repeat: no-repeat;
  background-position: 208px center;
}
</style>