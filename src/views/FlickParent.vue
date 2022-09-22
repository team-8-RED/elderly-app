<template>
  <div class="wrapper">
    <div class="title">
      <h2>フリック練習</h2>
    </div>
    <div class="contents" id="app">
      <p>実際に、フリックで、文字を入力してみよう！</p>
      <h3>Q.以下の「文字」をフリック動かして、入力してみよう!!</h3>
      <div>[{{ questions[count] }}]</div>
      <button v-on:click="checkQuiz">入力完了</button>
      <p>{{ comment }}</p>
      <button v-if="isTrue" v-on:click="nextQuiz">次の問題に進む</button>
      <input type="text" v-model="texts" />
      <div>
        <p>＜文字を消す時＞</p>
        <p>上の▢を触れて、◁ボタンを押そう！</p>
      </div>
      <div class="base">
        <div class="grid">
          <FlickA v-on:child="updateTexts"></FlickA>
          <FlickK v-on:child="updateTexts"></FlickK>
          <FlickS v-on:child="updateTexts"></FlickS>
          <FlickT v-on:child="updateTexts"></FlickT>
          <FlickN v-on:child="updateTexts"></FlickN>
          <FlickH v-on:child="updateTexts"></FlickH>
          <FlickM v-on:child="updateTexts"></FlickM>
          <FlickY v-on:child="updateTexts"></FlickY>
          <FlickR v-on:child="updateTexts"></FlickR>
          <FlickG v-on:child="updateTexts"></FlickG>
          <FlickW v-on:child="updateTexts"></FlickW>
          <FlickB v-on:child="updateTexts"></FlickB>
        </div>
      </div>
      <p>
        （注）キーボードをはみ出してしまうと入力される文字がおかしくなります
      </p>
    </div>
  </div>
</template>
<script>
import FlickA from "@/components/FlickA.vue"
import FlickK from "@/components/FlickK.vue"
import FlickS from "@/components/FlickS.vue"
import FlickT from "@/components/FlickT.vue"
import FlickN from "@/components/FlickN.vue"
import FlickH from "@/components/FlickH.vue"
import FlickM from "@/components/FlickM.vue"
import FlickY from "@/components/FlickY.vue"
import FlickR from "@/components/FlickR.vue"
import FlickW from "@/components/FlickW.vue"
import FlickG from "@/components/FlickG.vue"
import FlickB from "@/components/FlickB.vue"
export default {
  data() {
    return {
      texts: "",
      questions: [
        "めーるのおくりかた",
        "らいんのつかいかた",
        "すまほになれよう",
      ],
      count: 0,
      comment: "",
      isTrue: false,
    }
  },
  components: {
    FlickA,
    FlickK,
    FlickS,
    FlickT,
    FlickN,
    FlickH,
    FlickM,
    FlickY,
    FlickR,
    FlickW,
    FlickG,
    FlickB,
  },
  methods: {
    checkQuiz() {
      if (this.texts == this.questions[this.count]) {
        this.comment = "お見事！！よくできました"
        this.isTrue = !this.isTrue
      } else {
        this.comment = "残念！！よく見てもう一度やってみよう！"
      }
      console.log(this.texts)
    },
    nextQuiz() {
      this.count += 1
      if (this.count < this.questions.length) {
        this.comment = ""
        this.texts = ""
      } else {
        this.comment = "問題は終了だよ!"
      }
    },
    updateTexts(newTexts) {
      this.texts += newTexts
      console.log(this.texts)
    },
  },
  computed: {
    reloadPage() {
      const index = this.count
      const X = this.question[index]
      return X
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
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
}
.text {
  border-style: solid;
  padding: 15px;
  width: 180px;
}
.base {
  position: relative;
  height: 40vh;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(4, 50px);
  grid-gap: -20px;
  position: absolute;
  right: -20px;
}
</style>
