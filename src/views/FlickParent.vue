<template>
  <div class="wrapper">
    <div class="title">
      <h2>フリック練習</h2>
    </div>
    <div class="contents" id="app">
      <p>キーボードに指を置いて、表示キーに合わせる練習をしよう！</p>
      <input type="text" v-model="texts" />
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
import FlickT from "@/components/FlickS.vue"
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
    updateTexts(newTexts) {
      this.texts += newTexts
      console.log(this.texts)
    },
  },
}
</script>
<style>
.base {
  position: relative;
  height: 35vh;
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
