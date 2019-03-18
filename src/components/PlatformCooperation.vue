<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>合作机构
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
      <img src="../assets/images/xiangqing_03.jpg" alt>
      <p>坚持以金杜客户为中心的服务理念！旨在金杜内部律师之间、金杜客户之间建立一个信息互通、资源共享的投融资信息互动平台，使金杜不仅仅能够为客户提供专业化的法律服务，还能充分利用金杜强大的资源优势，为客户的商业需求提供交易机会。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "platform-cooperation"
};
</script>
<style >
.platform-cooperation {
  background-color: #fff;
}
.platform-cooperation img {
  width: 600px;
  margin-left: 74px;
  margin-bottom: 49px;
}
.platform-cooperation p {
  font-size: 30px;
  color: #676578;
  line-height: 42px;
  padding: 0 40px;
}
</style>