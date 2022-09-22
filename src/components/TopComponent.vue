<template>
  <div class="wrapper">
    <div class="title">
      <h2>トップページ</h2>
    </div>
    <div class="contents">
      <button class="button">コース一覧</button>
      <button class="button">
        <router-link to="/">ログアウト</router-link>
      </button>
      <button class="button">
        <router-link to="/staffCredit">スタッフクレジット想い</router-link>
      </button>
    </div>
  </div>
</template>
<style>
.title {
  text-align: left;
}
.button {
  appearance: none;
  width: 150px;
  height: 80px;
  border-radius: 5px;
  margin: 5px;
}
</style>
