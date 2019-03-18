<template>
  <div class="home-main">
    <div class="home-main-top">
      <ul :style="{display:'flex'}">
        <li :style="{borderRight:'1px solid #fff'}">项目收购</li>
        <li :style="{border:'1px solid #fff'}">项目转让</li>
        <li :style="{border:'1px solid #fff'}">项目合作</li>
        <li :style="{borderLeft:'1px solid #fff'}">项目融资</li>
      </ul>
    </div>
    <div class="home-main-bottom">
      <ul>
        <li>
          <i :style="{backgroundColor:' #ff0762'}"></i>
          <span>不良资产</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #fa464d'}"></i>
          <span>房地产交易</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #379dff'}"></i>
          <span>破产重组</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #feaa33'}"></i>
          <span>股权投资</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #8a6dfb'}"></i>
          <span>境外投资</span>
        </li>
      </ul>
      <ul>
        <li>
          <i :style="{backgroundColor:' #0acf97'}"></i>
          <span>外商投资</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #777edd'}"></i>
          <span>政府招商</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #ff679b'}"></i>
          <span>信托资管</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #02c0ce'}"></i>
          <span>知识产权</span>
        </li>
        <li>
          <i :style="{backgroundColor:' #4eb7eb'}"></i>
          <span>壳资源</span>
        </li>
      </ul>
    </div>
    <mt-switch></mt-switch>
  </div>
</template>
<script>
export default {
  name: "HomeMain"
};
</script>
<style >
.home-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mint-switch {
  width: 80px;
}
.home-main-top ul {
  padding: 0;
}
.home-main-top ul li {
  width: 186px;
  line-height: 70px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  font-size: 30px;
}
.home-main-bottom {
}
.home-main-bottom ul {
  display: flex;
  margin-top: 40px;
}
.home-main-bottom ul li {
  display: flex;
  flex-direction: column;
  width: 146px;
  height: 156px;
  text-align: center;
  align-items: center;
  font-size: 26px;
  color: #676578;
}
.home-main-bottom ul li i {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-bottom: 20px;
}
</style>