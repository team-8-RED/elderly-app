<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input id="name" type="text" v-model="name" />
    <br /><br />
    <label for="comment">コメント</label>
    <textarea id="comment" v-model="comment"></textarea>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <br />
      <div>名前:{{ post.fields.name.stringValue }}</div>
      <div>コメント:{{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      name: "",
      comment: "",
      post: [],
    }
  },
  methods: {
    createComment() {
      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/eldeely-app/databases/(default)/documents/comments",
          {
            //送りたいデータnameとcomment
            fields: {
              name: {
                stringValue: this.name,
              },
              comment: {
                stringValue: this.comment,
              },
            },
          }
        )
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      this.name = ""
      this.comment = ""
    },
  },
  created() {
    axios
      .get(
        //第一引数：取得したいサーバーのURL。第二引数:そのリクエストの設定
        "https://firestore.googleapis.com/v1/projects/eldeely-app/databases/(default)/documents/comments"
      )
      .then((response) => {
        this.posts = response.data.documents
        console.log(response)
      })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
