<template>
  <div class="mine-type">
    <header>
      <p>
        <button @click="$router.back()">〈</button>发布项目
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
    <div class="mine-release">
      <h4>
        标题
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入标题">
      <h4>
        简介
        <span>*</span>
      </h4>
      <textarea placeholder="请输入简介"></textarea>
      <h4>意向金额（可不填）</h4>
      <input type="text" placeholder="请输入意向金额">
      <h4>附件</h4>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        :file-list="fileList"
      >
        <button slot="trigger">+ 添加附件</button>
      </el-upload>
      <div class="mine-release-type">
        <h4>
          项目类型（可多选）
          <span>*</span>
        </h4>
        <input type="text" placeholder="请选择项目类型 " v-model="value">
        <button @click="show=false">〉</button>
        <div :class="{'type' : true, 'action': show}">
          <div>
            <p>请选择</p>
            <button @click="show=true">确定</button>
          </div>
          <mt-checklist align="left" v-model="value" :options="options"></mt-checklist>
        </div>
      </div>
      <div class="mine-release-type">
        <h4>
          项目分类
          <span>*</span>
        </h4>
        <input type="text" placeholder="请选择项目分类 " v-model="value1">
        <button @click="show1=false">〉</button>
        <div :class="{'type' : true, 'action': show1}">
          <div>
            <p>请选择</p>
            <button @click="show1=true">确定</button>
            <button @click="del" class="del">取消</button>
          </div>
          <mt-checklist align="right" v-model="value1" :options="options"></mt-checklist>
        </div>
      </div>
      <div class="mine-release-type">
        <h4>
          所属行业
          <span>*</span>
        </h4>
        <input type="text" placeholder="请选择所属行业 ">
        <button>〉</button>
      </div>
      <div class="mine-release-type">
        <h4>
          所属地区
          <span>*</span>
        </h4>
        <input type="text" placeholder="请选择所属地区 ">
        <button>〉</button>
      </div>
      <div class="mine-release-type">
        <h4>
          项目有效期
          <span>*</span>
        </h4>
        <input type="text" placeholder="请选择项目有效期 ">
        <button>〉</button>
      </div>
      <div class="mine-release-type">
        <h4>
          推送范围(推送到微信企业号，可多选)
          <span>*</span>
        </h4>
        <input type="text" placeholder="请选择推送范围 ">
        <button>〉</button>
      </div>
      <div class="mine-release-type">
        <h4>
          申请置顶
          <span>*</span>
        </h4>
        <input type="text" placeholder="不申请 ">
        <button>〉</button>
      </div>
      <div class="mine-release-type">
        <h4>
          申请首页轮播
          <span>*</span>
        </h4>
        <input type="text" placeholder="不申请 ">
        <button>〉</button>
      </div>
      <h4>
        联系人姓名
        <span>*</span>
      </h4>
      <input type="text" placeholder="张三">
      <h4>
        邮箱
        <span>*</span>
      </h4>
      <input type="text" placeholder="zhangsan@kwm.com">
      <h4>
        手机号
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入手机号码">
      <h4>
        座机
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入座机号码">
    </div>
    <div class="mine-type-footer">
      <el-checkbox>我确保以上信息真实准确</el-checkbox>
      <button>保存</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine-release",
  data: () => ({
    show: true,
    show1: true,
    sheetVisible: false,
    value: [],
    value1: [],
    options: [
      {
        label: "项目收购",
        value: "项目收购"
      },
      {
        label: "项目转让",
        value: "项目转让"
      },
      {
        label: "项目合作",
        value: "项目合作"
      },
      {
        label: "项目融资",
        value: "项目融资"
      }
    ],
    fileList: [
      {
        name: "委托代理协议.docx"
      }
    ]
  }),
  methods: {
    del() {
      (this.show1 = true), (this.value1 = []);
    },
    change() {
      this.sheetVisible = !this.sheetVisible;
    }
  }
};
</script>
<style>
.mine-type {
  /* padding-bottom: 120px; */
}
.mine-release-type > .type {
  position: fixed;
  width: 750px;
  bottom: 0px;
  z-index: 10;
  visibility: visible;
  transition: all 1s;
}
.mint-checklist-title {
  display: none;
}
.mine-release-type > .action {
  visibility: hidden;
  bottom: -722px;
}
.type > div {
  position: relative;
  width: 750px;
  line-height: 122px;
  background-color: #f2f2f2;
}
.type > div > p {
  font-size: 36px;
  margin-left: 324px;
}
.type > div > button {
  border: 0;
  outline: 0;
  background-color: #f2f2f2;
  bottom: 45px;
  font-size: 28px;
  z-index: 11;
  position: absolute;
  right: 38px;
  color: #007bff;
}
.type > div > .del {
  left: 41px;
  color: #979797;
}
.mint-cell .mint-cell-wrapper {
  line-height: 118px;
  font-size: 32px;
}
.mint-checkbox-core {
  width: 40px;
  height: 40px;
}
.mint-checkbox-core::after {
  width: 10px;
  height: 20px;
  left: 14px;
}
.mine-release {
  background-color: #fff;
}
.mine-release h4 {
  font-size: 30px;
  margin-left: 40px;
  line-height: 84px;
}
.mine-release h4 span {
  color: #ff4081;
}
.mine-release input {
  font-size: 34px;
  width: 712px;
  line-height: 66px;
  outline: 0;
  border: 0;
  border-bottom: 2px solid #f2f2f2;
  margin-left: 20px;
  text-indent: 20px;
  color: #676578;
}
.mine-release textarea {
  font-size: 34px;
  width: 712px;
  outline: 0;
  border: 0;
  border-bottom: 2px solid #f2f2f2;
  margin-left: 20px;
  text-indent: 20px;
  color: #676578;
  height: 112px;
}
.upload-demo {
  background-color: #fff;

  height: 220px;
  position: relative;
  border-bottom: 2px solid #f2f2f2;
}
.mine-release .upload-demo button {
  font-size: 30px;
  width: 180px;
  height: 53px;
  outline: 0;
  color: #007bff;
  margin-left: 270px;
  margin-top: 140px;
}
.el-upload-list__item-name {
  font-size: 30px;
}
.upload-demo > .el-upload-list {
  position: absolute;
  width: 750px;
  height: 30px;
  top: 0;
  left: 0;
}
.mine-release-type > button {
  background-color: #fff;
  outline: 0;
  font-size: 28px;
  position: absolute;
  right: 20px;
  bottom: 10px;
  border: 0;
}
.mine-release-type {
  position: relative;
}
.mine-type-footer {
  margin-top: 44px;
  padding-left: 40px;
}
.mine-type-footer > button {
  outline: 0;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  background-color: #007bff;
  display: block;
  margin-top: 105px;
  width: 670px;
  line-height: 80px;
}
.mine-type-footer > .el-checkbox > span {
  font-size: 27px;
}
.mine-type-footer
  > .el-checkbox.is-bordered.el-checkbox--medium
  .el-checkbox__inner,
.el-checkbox__inner {
  width: 30px;
  height: 30px;
}
.el-checkbox__inner::after {
  bottom: 2px;
  left: 9px;
  width: 10px;
  height: 20px;
}
</style>
