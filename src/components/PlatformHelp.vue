<template>
  <div>
    <header>
      <p>
        <button @click="$router.back()">〈</button>投融咨讯
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
      <h3>一、如何进行平台的注册及登录？</h3>
      <p>金杜员工无需注册，在内网以及企业微信上默认登录，但在微信小程序登录时需输入用户名和密码（待定）。</p>
    </div>
    <div>
      <h3>二、如何获得平台的VIP账户？</h3>
      <p>平台的“VIP用户系统”有待事务所管理层批准后方可推出。</p>
      <p>平台将对VIP账户的授予设定规则，VIP账户需要合伙人向平台提出申请，在获得平台批准后授予特定客户VIP账号和密码，VIP用户可以凭借该用户名和密码登录微信小程序，但无法登录金杜的内网。</p>
    </div>
    <div>
      <h3>三、如何在平台上发布项目？</h3>
      <p>1.首先，登录平台；</p>
      <p>2.其次，登录后，在主页面点击“发布项目”按钮进行操作（如图）；</p>
      <p>3.根据界面提示进行信息填写。其中，标有红色“*”号的栏目属于必填（如图）</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "platform-help"
};
</script>
<style>
</style>
