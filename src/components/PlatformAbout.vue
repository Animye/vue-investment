<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>关于平台
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
    <div class="platform-cooperation">
      <h3>平台定位</h3>
      <img src="../assets/images/xiangqing_03.jpg" alt>
      <p>坚持以金杜客户为中心的服务理念！旨在金杜内部律师之间、金杜客户之间建立一个信息互通、资源共享的投融资信息互动平台，使金杜不仅仅能够为客户提供专业化的法律服务，还能充分利用金杜强大的资源优势，为客户的商业需求提供交易机会。</p>
    </div>
    <div class="platform-about">
      <h3>访问端口</h3>
      <p>金杜内网：限金杜员工</p>
      <p>企业微信：限金杜员工</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "platform-about"
};
</script>
<style>
.platform-cooperation h3,
.platform-about h3 {
  font-weight: normal;
  font-size: 30px;
  color: #2d2d41;
  line-height: 100px;
  text-align: center;
}
.platform-about {
  background-color: #fff;
}
.platform-about p {
  font-size: 30px;
  color: #2d2d41;
  line-height: 42px;
  padding: 0 40px;
}
</style>
