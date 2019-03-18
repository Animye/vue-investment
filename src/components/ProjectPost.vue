<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>项目详情
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
    <div v-if="post" class="project-post">
      <h2>{{post.title}}</h2>
      <p class="project-time">
        <span>2018-12-19 11:04:00</span>
      </p>
      <p class="project-content">{{post.content}}</p>
    </div>
    <div v-else>...</div>
    <div class="project-price">
      <p>
        意向金额：
        <span :style="{color:'#ff4081'}">￥1000000</span>
      </p>
      <p>项目编号：p201812200001</p>
      <p>项目类型：项目收购、项目合作</p>
      <p>项目分类：壳资源</p>
      <p>所属地区：上海市</p>
      <p>项目有效期：长期</p>
      <p>附件：香港公司资料.docx</p>
    </div>
    <p :style="{backgroundColor: '#fff',marginTop:'10px',color:'#2d2d41',fontSize:'32px'}">联系方式</p>
    <div class="project-contact">
      <img
        src="../assets/hulu.jpeg"
        alt
        :style="{width:'100px',height:'100px',marginTop:'40px',borderRadius:'50%' ,marginBottom:'40px'}"
      >
      <p>刘海涛</p>
      <p>
        <span>上海 合伙人</span>
      </p>
      <p>邮箱：panyujia@kwm.com</p>
      <p>座机：010-88888888</p>
      <p>手机号：18888888888</p>
    </div>
    <ProjectComments/>
  </div>
</template>
<script>
import ProjectComments from "./ProjectComments";
export default {
  name: "project-post",
  components: { ProjectComments },
  methods: {},
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getPost", id);
  },
  computed: {
    post() {
      return this.$store.state.posts.post;
    }
  }
};
</script>
<style>
.project-post {
  background-color: #fff;
  padding: 0 40px;
}
.project-post > h2 {
  font-size: 30px;
  font-weight: normal;
}
.project-time {
  line-height: 120px;
}
.project-time > span {
  color: #979797;
  font-size: 21px;
}
.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 27px;
  color: #676578;
  padding-bottom: 40px;
}
.project-contact {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 29px;
  color: #2d2d41;
  background-color: #fff;
}
.project-contact > p {
  margin-bottom: 40px;
  line-height: 40px;
  color: #676578;
}
.project-price {
  padding: 0 40px;
  background-color: #fff;
  margin-top: 10px;
}
.project-price > p {
  color: #2d2d41;
  line-height: 64px;
  font-size: 29px;
}
</style>
