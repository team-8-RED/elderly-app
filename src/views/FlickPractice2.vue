<template>
  <div class="wrapper">
    <div class="title">
      <h2>フリック入力</h2>
    </div>
    <img src="@/assets/image1.jpg" alt="フリック画面" class="flickDisplay" />
    <div class="contents-flick">
      <div>
        <h3>フリックキーボードの法則</h3>
        <p>キーボードは、全て初めは、「あ段」しか見えていません！！</p>
        <p>左が「い段」、上が「う段」</p>
        <p>右が「え段」、下が「お段」 になっています。</p>
      </div>
      <div class="u">
        <button class="button">
          <router-link to="/flickParent">練習問題に進む</router-link>
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
.u {
  display: flex;
  justify-content: right;
}
.u button {
  width: 110px;
  height: 30px;
  margin-right: 30px;
}
</style>
