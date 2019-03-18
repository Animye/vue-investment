<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>申请VIP账号
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
        VIP全称
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入VIP全称">
      <h4>
        VIP简称
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入VIP简称">
      <h4>
        行业
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入行业">
      <h4>
        地区
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入地区">
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
      <h4>
        联系人姓名
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入联系人姓名">
      <h4>
        职位
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入联系人的职位">
      <h4>
        邮箱
        <span>*</span>
      </h4>
      <input type="text" placeholder="请输入联系人的邮箱">
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
      <button>申请</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine-apply-vip",
  data: () => ({
    show: true,
    value: [],
    options: [
      {
        label: "房地产交易",
        value: "房地产交易"
      },
      {
        label: "不良资产",
        value: "不良资产"
      },
      {
        label: "破产重组",
        value: "破产重组"
      },
      {
        label: "股权投资",
        value: "股权投资"
      }
    ]
  })
};
</script>