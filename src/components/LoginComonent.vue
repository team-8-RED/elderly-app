<template>
  <div class="wrapper" id="app">
    <div class="register">
      <div class="title">
        <h3>初めてログインする方はこちらから</h3>
        <h2>新規登録</h2>
      </div>
      <div class="contents">
        <label class="label">ニックネーム：</label>
        <input type="text" class="text" id="name" v-model="inputName" />
        <label class="label">誕生日4桁:</label>
        <label class="label">例)6月7日生まれであれば、「 0607」を入力 </label>
        <input type="text" class="text" id="password" v-model="inputPassword" />
        <button v-on:click="addAcount">
          <router-link to="/loginForm">新規登録</router-link>
        </button>
        <div>{{ trueRegister }}</div>
      </div>
    </div>
    <div>
      <div class="login">
        <div class="title">
          <h3>新規登録をされた方/既にアカウントをお持ちの方はこちらから</h3>
          <h2>ログイン</h2>
        </div>
        <div class="contents">
          <label class="label">ニックネーム:</label>
          <input type="text" class="text" v-model="loginName" />
          <label class="label">誕生日4桁:</label>
          <label class="label">例)6月7日生まれであれば、「 0607」を入力 </label>
          <input type="text" class="text" v-model="password" />
          <button v-on:click="checkLogin">ログイン</button>
          <button><router-link to="/">ホームに戻る</router-link></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      inputName: "",
      inputPassword: "",
      loginName: "",
      password: "",
      isLogin: "true",
      trueRegister: "",
    }
  },

  methods: {
    addAcount() {
      //usersに、入力した値をオブジェクト形式で文字列で格納する
      this.users.push(this.inputName, this.inputPassword)
      console.log(this.users)
      this.trueRegister = "新規登録完了できたよ！！ログインしよう！"
      console.log(this.trueRegister)
    },
    checkLogin() {
      //入力された情報を配列内で検索して、見つかれば、ページ遷移
      const checkPassword = this.users.includes(this.password)
      if (checkPassword) {
        this.isLogin = false
      }
    },
  },
}
</script>
<style>
.title {
  text-align: center;
}
.contents {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  margin: 0.25rem;
}
.label {
  text-align: left;
  font-size: 15px;
}
.hr1 {
  border: none;
  padding: 20px 0;
  border-top: 3px solid rgb(117, 117, 117); /* グレイ */
}
</style>
