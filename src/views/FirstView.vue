<template>
  <div class="contents">
    <div class="title-text">
      <p class="phone">スマホのみ対応</p>
      <h2>スマホで</h2>
      <h2>人生を豊かにしよう。</h2>
    </div>
    <div class="button-wrapper">
      <button class="start-button">
        <router-link to="/loginForm">ログイン</router-link>
      </button>
    </div>
    <div class="site-image">
      <img src="@/assets/appImage2.jpeg" alt="サイトイメージ1" />
      <img src="@/assets/teacherMan.png" alt="先生" class="teacherMan" />
      <img src="@/assets/app-image2.jpeg" alt="サイトイメージ２" />
    </div>
  </div>
</template>

<style>
.phone {
  border: 1px solid black;
}
.title-text {
  padding: 20px;
  text-align: center;
}
.site-image {
  background: #e1eec1;
  height: 35vh;
  width: 100vh;
  position: relative;
}
.start-button {
  background-color: #7ab977;
  color: #fff;
  margin: 0.25rem;
  margin-bottom: 30px;
}
.site-image img {
  width: 130px;
  margin-top: 5px;
  margin: 5px;
}
.teacherMan {
  top: -70px;
  width: 1px;
  position: absolute;
  right: 140px;
}
</style>
