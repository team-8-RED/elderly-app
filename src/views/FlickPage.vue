<template>
  <div class="wrapper">
    <div class="title">
      <h3>文字入力練習</h3>
    </div>
    <div class="contents" id="app">
      <input type="text" v-model="texts" />
      <div
        class="flick-list"
        v-on:touchstart="touchKey"
        v-on:touchmove="touchMove"
      >
        <div class="flick-median" v-on:touchend="touchEnd">あ</div>
        <div class="flick-left" v-if="displayKey">い</div>
        <div class="flick-top" v-if="displayKey">う</div>
        <div class="flick-right" v-if="displayKey">え</div>
        <div class="flick-bottom" v-if="displayKey">お</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [],
      X: 0,
      Y: 0,
      displayKey: false,
    }
  },
  methods: {
    notclick(e) {
      e.preventDefault()
    },
    touchKey(e) {
      this.displayKey = true
      this.startX = e.touches[0].pageX
      this.startY = e.touches[0].pageY
    },
    touchEnd(e) {
      //離すと非表示
      this.displayKey = !this.displayKey
      this.X = e.clientX || e.changedTouches[0].clientX
      this.Y = e.clientY || e.changedTouches[0].clientY
      //selectに指を離したときの要素を取得
      const select = document.elementFromPoint(this.X, this.Y)
      console.log(select.innerText)
      this.texts.push(select.innerText)
      console.log(this.texts)
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
.flick-list {
  list-style: none;
  position: relative;
  padding: 0;
  margin-left: 50px;
  margin-top: 50px;
}
.flick-list div {
  border: 1px solid gray;
  font-size: 25px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  z-index: 0;
}
.flick-list div:hover {
  background-color: blue;
  color: white;
}
.flick-left,
.flick-top,
.flick-right,
.flick-bottom {
  position: absolute;
  top: 0;
  left: 0;
  background-color: antiquewhite;
}
.flick-list .flick-left {
  top: 0;
  left: -41px;
  z-index: 1;
}
.flick-list .flick-top {
  top: -41px;
  left: 0;
  z-index: 1;
}
.flick-list .flick-right {
  top: 0px;
  left: 41px;
  z-index: 1;
}
.flick-list .flick-bottom {
  top: 41px;
  left: 0;
  z-index: 1;
}
</style>
