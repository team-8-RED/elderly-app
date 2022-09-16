<template>
  <div class="wrapper">
    <div class="title">
      <h3>文字入力練習</h3>
    </div>
    <div class="contents" id="app">
      <div class="text">
        <div v-for="text in texts" v-bind:key="text">{{ texts.text }}</div>
      </div>
      <div class="key-board">
        <div
          class="u-key"
          v-for="text in ukeys"
          :key="text"
          v-bind:class="ukeys.color"
        >
          {{ text }}
        </div>
        <div
          class="i-key"
          v-for="text in ikeys"
          :key="text"
          v-bind:class="ikeys.color"
        >
          {{ text }}
        </div>
        <button
          class="button"
          v-bind:class="akeys.color"
          v-on:touchstart="touchStart"
          v-on:touchmove="touchMove"
          v-on:touchend="touchEnd"
          v-for="text in akeys"
          :key="text"
        >
          {{ text }}
        </button>
        <div
          class="e-key"
          v-for="text in ekeys"
          :key="text"
          v-bind:class="ekeys.color"
        >
          {{ text }}
        </div>
        <div
          class="o-key"
          v-for="text in okeys"
          :key="text"
          v-bind:class="okeys.color"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      akeys: { color: "", text: "か" },
      ikeys: { color: "", text: "き" },
      ukeys: { color: "", text: "く" },
      ekeys: { color: "", text: "け" },
      okeys: { color: "", text: "こ" },
      color: "",
      startX: 0,
      moveX: 0,
      startY: 0,
      moveY: 0,
    }
  },
  methods: {
    touchStart(e) {
      this.akeys.color = "blue"
      this.startX = e.touches[0].pageX
      this.startY = e.touches[0].pageY
    },
    touchMove(e) {
      this.moveX = e.touches[0].pageX - this.startX
      this.moveY = e.touches[0].pageY - this.startY
      //横のスライド「き」「け」
      //値は、マスの大きさで決める
      if (this.moveX > 40) {
        this.ekeys.color = "blue"
        this.akeys.color = ""
      } else if (this.moveX < -40) {
        this.ikeys.color = "blue"
        this.akeys.color = ""
      } else {
        this.akeys.color = "blue"
        this.ikeys.color = ""
        this.ekeys.color = ""
      }
      //縦の動き「く」と「こ」
      if (this.moveY < -40) {
        this.ukeys.color = "blue"
        this.akeys.color = ""
      } else if (this.moveY > 40) {
        this.okeys.color = "blue"
        this.akeys.color = ""
      } else {
        this.akeys.color = "blue"
        this.ukeys.color = ""
        this.okeys.color = ""
      }
    },
    touchEnd() {
      this.akeys.color = ""
      this.ikeys.color = ""
      this.ukeys.color = ""
      this.ekeys.color = ""
      this.okeys.color = ""
    },
  },
  computed: {},
}
</script>
<style>
.title {
  text-align: center;
  border-style: solid;
  margin-right: 60%;
  padding: 1px;
}
.contents {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
}
.text {
  border-style: solid;
  padding: 15px;
}
.key-board {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
/*キーボードの配置
~~~~~~~~~~~~~~~~~~~~~~~*/
.u-key {
  border-style: solid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.i-key {
  border-style: solid;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
.button {
  border-style: solid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
.e-key {
  border-style: solid;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}
.o-key {
  border-style: solid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}
</style>
