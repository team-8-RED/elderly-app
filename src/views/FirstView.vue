<template>
  <div class="contents">
    <div class="title-text">
      <h2>スマホで</h2>
      <h2>人生を豊かにしよう</h2>
    </div>
    <div class="button-wrapper">
      <button class="start-button">ログイン</button>
      <button class="start-button">新規登録</button>
    </div>
    <div class="site-image">
      <img src="" alt="サイトイメージ" />
    </div>
  </div>
</template>

<style>
.contents {
  display: flex;
  flex-direction: column;
}
.title-text {
  padding: 20px;
  text-align: center;
}
.site-image {
  background-color: #e1eec1;
  height: 30vh;
  background-size: cover;
}
.start-button {
  background-color: #7ab977;
  color: #fff;
  margin: 0.25rem;
  margin-bottom: 30px;
}
</style>
