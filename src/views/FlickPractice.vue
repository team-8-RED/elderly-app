<template>
  <div class="wrapper">
    <div class="title">
      <h2>フリック入力</h2>
    </div>
    <img src="@/assets/image0.jpg" alt="フリック画面" class="flickDisplay" />
    <div class="contents-flick">
      <div>
        <h3>スマホ初学者の最初の壁である「フリック入力」</h3>
        <h3>フリックキーボードの操作の流れ</h3>
        <p>⑴画面に置いた指をスライドして、文字を選択</p>
        <p>⑵離すと、文字が入力される</p>
      </div>
      <div class="i">
        <button class="button">
          <router-link to="/flickPractice2">次に進む</router-link>
        </button>
        <img src="../assets/teacherLady.png" alt="先生" class="flickTeacher" />
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.flickDisplay {
  width: 300px;
}
.flickTeacher {
  width: 100px;
}
.contents-flick div p {
  text-align: left;
}
.i {
  display: flex;
  justify-content: right;
}
.i button {
  width: 100px;
  height: 30px;
  margin-right: 30px;
}
</style>
