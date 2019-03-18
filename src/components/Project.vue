<template>
  <div class="home">
    <header>
      <p>项目</p>
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
    <div class="project">
      <ul>
        <li>类型</li>
        <li>分类</li>
        <li>行业</li>
        <li>地区</li>
        <li>排序</li>
      </ul>
    </div>
    <ProjectPosts/>
  </div>
</template>
<script>
import ProjectPosts from "./ProjectPosts";
export default {
  name: "project",
  components: {
    ProjectPosts
  }
};
</script>
<style>
.project {
  background-color: #fff;
}
.project > ul {
  display: flex;
  justify-content: space-around;
}
.project > ul > li {
  font-size: 30px;
  width: 110px;
  line-height: 124px;
  text-align: center;
}
</style>
