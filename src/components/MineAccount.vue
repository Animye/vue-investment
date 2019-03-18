<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>账户设置
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
    <div>
      <mt-field label="头像" :readonly="true">
        <img src="../assets/hulu.jpeg" alt>
      </mt-field>
      <mt-field label="用户名" placeholder="zhangsan" :readonly="true"></mt-field>
      <mt-field label="姓名" placeholder="请输入您的姓名" v-model="username">
        <button @click="account">〉</button>
      </mt-field>
      <mt-field label="公司名称" placeholder="请输入公司名称" v-model="usercompany">
        <button @click="company">〉</button>
      </mt-field>
      <mt-field label="公司简称" placeholder="请输入公司简称" v-model="userabbreviation">
        <button @click="abbreviation">〉</button>
      </mt-field>
      <mt-field label="职位" placeholder="律师" v-model="userposition">
        <button @click="position">〉</button>
      </mt-field>
      <mt-field label="手机号" placeholder="188888888888" v-model="userphone">
        <button @click="phone">〉</button>
      </mt-field>
      <mt-field label="邮箱" placeholder="张三@cn.kwm.com">
        <button @click="company">〉</button>
      </mt-field>
      <mt-field label="座机" placeholder="01058785888">
        <button @click="company">〉</button>
      </mt-field>
      <mt-field label="我的投融资客户" :readonly="true">
        <button>〉</button>
      </mt-field>
      <mt-field label="修改密码" :readonly="true">
        <button>〉</button>
      </mt-field>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine-account",
  data: () => ({
    username: "",
    usercompany: "",
    userabbreviation: "",
    userposition: "",
    userphone: ""
  }),
  methods: {
    account() {
      this.$messagebox
        .prompt("", {
          message: "姓名",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
        .then(({ value, action }) => {
          if (action == "confirm") {
            this.username = value;
          }
        })
        .catch(() => {});
    },
    company() {
      this.$messagebox
        .prompt("", {
          message: "公司名称",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
        .then(({ value, action }) => {
          if (action == "confirm") {
            this.usercompany = value;
          }
        })
        .catch(() => {});
    },
    abbreviation() {
      this.$messagebox
        .prompt("", {
          message: "公司简称",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
        .then(({ value, action }) => {
          if (action == "confirm") {
            this.userabbreviation = value;
          }
        })
        .catch(() => {});
    },
    position() {
      this.$messagebox
        .prompt("", {
          message: "公司职位",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
        .then(({ value, action }) => {
          if (action == "confirm") {
            this.userposition = value;
          }
        })
        .catch(() => {});
    },
    phone() {
      this.$messagebox
        .prompt("", {
          message: "手机号",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
        .then(({ value, action }) => {
          if (action == "confirm") {
            this.userphone = value;
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style>
.mint-msgbox-message {
  line-height: 124px;
}
.mint-msgbox {
  width: 671px;
  font-size: 32px;
}
.mint-msgbox-input {
  width: 620px;
}
.mint-msgbox-input > input {
  font-size: 30px;
  line-height: 77px;
}
.mint-msgbox-btns {
  width: 671px;
  height: 121px;
}
.mint-msgbox-btns .mint-msgbox-btn {
  width: 314px;
  line-height: 121px;
  font-size: 30px;
}
.mint-field .mint-cell-title {
  flex: 1;
}
.mint-field-core {
  text-align: right;
}
.mint-cell-wrapper button {
  background-color: #fff;
  outline: 0;
  border: 0;
  font-size: 28px;
  margin-left: 42px;
}
.mint-cell-wrapper img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
