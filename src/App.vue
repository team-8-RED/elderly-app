<template>
  <div class="container1">
    <h1>学習内容を選択してください</h1>
  </div>

  <div class="container2">
    <button v-on:click="sentmail">孫にメールを送る編</button>
    <button v-on:click="call">孫に電話をかける編</button>
  </div>
  <div class="container3">
    <button v-on:click="addfriends">友達を追加する編</button>
    <button v-on:click="sentphotos">アルバムの写真を送る編</button>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style>
#app {
  color: #e1eec1;
  background-color: #e1eec1;
  margin-top: 10px;
}
.container1 {
  justify-content: space-around;
  background-color: #7ab977;
}
.container2 {
  display: flex;

  flex-flow: row wrap;
  justify-content: space-between;
  padding: 100px;
}
.container3 {
  display: flex;

  flex-flow: row wrap;
  justify-content: space-between;
  padding: 100px;
}
button {
  background-color: #7ab977;
  padding: 10px;
  color: aliceblue;
  border-radius: 30px;
}
</style>
