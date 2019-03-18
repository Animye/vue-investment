<template>
  <div class="home-project">
    <ul>
      <li>
        <router-link to="/">最新项目</router-link>
      </li>

      <li>
        <router-link to="/recommend">推荐项目</router-link>
      </li>
      <li>
        <router-link to="/hottest">最热项目</router-link>
      </li>
    </ul>
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script>
export default {
  name: "HomeProject"
};
</script>
<style >
.home-project > ul {
  background-color: #fff;
  justify-content: center;
  display: flex;
}
.home-project > ul li {
  text-align: center;
  cursor: pointer;
  font-size: 31px;
  line-height: 116px;
}
.home-project > ul li a {
  text-align: center;
  cursor: pointer;
  font-size: 31px;
  line-height: 116px;
  display: block;
  width: 201px;
  text-decoration: none;
  color: #71777c;
}
.home-project > ul li a.router-link-exact-active {
  color: #007fff;
  border-bottom: 6px solid #007fff;
}
</style>