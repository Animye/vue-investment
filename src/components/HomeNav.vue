<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/daohang_35.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/daohang_35.jpg" alt>
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/daohang_35.jpg" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "homenav",
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true
    });
  }
};
</script>
<style >
.swiper-slide > img {
  width: 750px;
}
</style>