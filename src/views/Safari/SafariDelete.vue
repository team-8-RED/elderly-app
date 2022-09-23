<template>
  <header id="header2">
    <router-link to="/safaricourse">講義</router-link> |
    <router-link to="/workoutcall">問題</router-link> |
    <router-link to="courselist">一覧に戻る</router-link>
  </header>
  <h1 class="h">タブを消去しよう</h1>
  <img
    v-bind:src="currentimg"
    class="slides"
    alt="理解をしたら次へを押してください"
  />
  <div class="buttons">
    <button @click="prev" class="prev">戻る</button>
    <button @click="next" class="next">次へ</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ImgSrc: [
        require("@/imgs/Safari/Deletetabs/deletetabs1.png"),

        require("@/imgs/Safari/Deletetabs/deletetabs2.png"),

        require("@/imgs/Safari/Deletetabs/deletetabs3.png"),
      ],
      currentIndex: -1,
    }
  },
  methods: {
    next() {
      this.currentIndex++
      if (this.currentIndex >= this.ImgSrc.length) {
        this.currentIndex = 0
      }
      console.log(this.ImgSrc.length)
    },
    prev() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.ImgSrc.length - 1
      }
    },
  },
  computed: {
    currentimg() {
      return this.ImgSrc[this.currentIndex]
    },
  },
}
</script>
<style>
.h {
  width: 390px;
}
.header {
  background-color: #7ab977;
}
.slides {
  width: 390px;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
