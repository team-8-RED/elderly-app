<template>
  <div class="flick-list" v-on:touchstart="touchKey">
    <div class="flick-median" v-on:touchend.self="touchEnd">な</div>
    <div class="flick-left" v-if="displayKey">に</div>
    <div class="flick-top" v-if="displayKey">ぬ</div>
    <div class="flick-right" v-if="displayKey">ね</div>
    <div class="flick-bottom" v-if="displayKey">の</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: "",
      X: 0,
      Y: 0,
      displayKey: false,
    }
  },

  methods: {
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
      this.texts = select.innerText
      console.log(this.texts)
      this.$emit("child", this.texts)
    },
  },
}
</script>
<style>
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
.flick-left,
.flick-top,
.flick-right,
.flick-bottom {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: antiquewhite;
}
.flick-list .flick-left {
  top: 0;
  left: -41px;
}
.flick-list .flick-top {
  top: -41px;
  left: 0;
}
.flick-list .flick-right {
  top: 0px;
  left: 41px;
}
.flick-list .flick-bottom {
  top: 41px;
  left: 0;
}
</style>
