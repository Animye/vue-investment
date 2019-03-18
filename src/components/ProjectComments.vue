<template>
  <div class="project-comments">
    <h2>评论</h2>
    <div v-if="comments.length" class="project-exhibition-comments">
      <ul v-for="comment in comments" :key="comment.id">
        <img src="../assets/logo.png" alt :style="{width:'60px',height:'60px'}">
        <li>
          <P :style="{lineHeight:'80px'}">
            <span>林嘉 2018-12-20 14:46</span>
            <span
              @click="()=>{delComment(comment.id)
              }"
              :style="{marginLeft:'150px'}"
            >删除</span>
          </P>
          <p :style="{lineHeight:'38px'}">{{comment.txt}}</p>
        </li>
      </ul>
    </div>
    <div v-else>请添加评论</div>
    <div class="project-input-comments">
      <img src="../assets/logo.png" alt>
      <input type="text" v-model="comment">
      <button @click="addComment">发送</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "project-comments",
  data: () => ({
    comment: ""
  }),
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("getComments", id);
    // this.addComment(this.clearInput);
  },
  computed: {
    comments() {
      return this.$store.state.comments.comments;
    }
  },
  methods: {
    addComment() {
      const { id } = this.$route.params;
      const newComment = {
        txt: this.comment,
        postId: id
      };
      this.$store.dispatch("addComment", {
        newComment,
        clearInput: this.clearInput
      });
    },
    delComment(id) {
      this.$messagebox
        .confirm("", {
          message: "你确定删除此条评论吗？",
          title: "提示",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
        .then(action => {
          if (action == "confirm") {
            //确认的回调
            this.$store.dispatch("delComment", id);
          }
        })
        .catch(err => {
          if (err == "cancel") {
            //取消的回调
          }
        });
    },
    clearInput() {
      this.comment = "";
    }
  }
};
</script>
<style>
.project-comments {
  /* padding-bottom: 120px; */
}
.project-exhibition-comments {
}
.project-exhibition-comments > ul {
  display: flex;
}
.project-exhibition-comments > ul > li {
  height: 193px;
}
.project-exhibition-comments > ul > img {
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 41px;
}
.project-input-comments {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-input-comments > input {
  width: 472px;
  line-height: 70px;
  margin: 0 20px;
  border: 0;
  outline: 0;
  font-size: 28px;
  text-indent: 56px;
}
.project-input-comments > button {
  width: 100px;
  line-height: 70px;
  outline: 0;
  background-color: #007bff;
  color: #fff;
  font-size: 26px;
  border-radius: 5px;
}
.project-input-comments > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
