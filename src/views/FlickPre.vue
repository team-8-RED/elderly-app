<template>
  <div id="app">
    <div>
      <h2>フリック。まず全体</h2>
    </div>
    <div>
      <div class="text">
        <div v-for="text in texts" v-bind:key="text">{{ texts.text }}</div>
      </div>
    </div>
    <div>
      <div class="keyContent">
        <!--1段目-->
        <div class="key" id="00">X</div>

        <div class="key" id="01">X</div>

        <div class="key" id="02">X</div>

        <div class="key" id="03">X</div>

        <div class="key" id="04">X</div>
        <!--2段目-->
        <div class="key" id="10">X</div>

        <div
          class="key"
          id="11"
          v-on:touchstart="touchStart"
          v-on:touchmove="touchMove"
          v-on:touchend="touchEnd"
        >
          <div id="flick-median">あ</div>
          <div id="flick-left">い</div>
          <div id="flick-top">う</div>
          <div id="flick-right">え</div>
          <div id="flick-bottom">お</div>
        </div>

        <div class="key" id="12">か</div>

        <div class="key" id="13">さ</div>

        <div class="key" id="14">X</div>
        <!--3段目-->
        <div class="key" id="20">X</div>

        <div class="key" id="21">た</div>

        <div class="key" id="22">な</div>

        <div class="key" id="23">は</div>

        <div class="key" id="24">X</div>
        <!--4段目-->
        <div class="key" id="30">X</div>

        <div class="key" id="31">ま</div>

        <div class="key" id="32">や</div>

        <div class="key" id="33">ら</div>

        <div class="key" id="34">X</div>
        <!--5段目-->
        <div class="key" id="40">X</div>

        <div class="key" id="41">^_^</div>

        <div class="key" id="42">わ</div>

        <div class="key" id="43">?</div>

        <div class="key" id="44">X</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      texts: [],
      //positionには、createdで座標が入っている
      akeys: { color: "", text: "か", position: 0 },
      ikeys: { color: "", text: "き", position: 0 },
      ukeys: { color: "", text: "く", position: 0 },
      ekeys: { color: "", text: "け", position: 0 },
      okeys: { color: "", text: "こ", position: 0 },
      color: "",
      Kclick: false,
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
}
</script>
<style>
.keyContent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 2px;
}
.key {
  width: 100%;
  height: 30px;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: gray;
  color: #ffffff;
  position: relative;
}
.key td {
  padding: 10px;
  border: solid 1px #ffffff;
  min-width: 50px;
  padding: 10px;
  position: relative;
}
.tap {
  position: absolute;
  border: 1px solid #333;
  background: #fad590;
  width: 95%;
  height: 95%;
  top: 1px;
  left: 0.5px;
  line-height: 40px;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}
</style>
