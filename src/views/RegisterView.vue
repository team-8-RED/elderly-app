<template>
  <div>
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
        <button><router-link to="/first">ホームに戻る</router-link></button>
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
    }
  },
  methods: {
    addAcount() {
      this.users.push({
        trueName: String(this.inputName),
        truePassword: String(this.inputPassword),
      })
      console.log(this.users)
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
</style>
