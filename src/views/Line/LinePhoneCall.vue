<template>
  <header id="header2">
    <button><router-link to="/linephonecall">講義</router-link></button>
    <button><router-link to="/workoutcall">問題</router-link></button>
    <button><router-link to="/linecourse">一覧に戻る</router-link></button>
  </header>
  <h1 class="h">孫にメッセージを送ろう</h1>
  <img v-bind:src="currentimg" class="slides" alt="次へを押してください" />
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
        require("@/imgs/Line/Call/call1.png"),

        require("@/imgs/Line/Call/call2.png"),

        require("@/imgs/Line/Call/call3.png"),
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
.slides {
  width: 390px;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
