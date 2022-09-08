<template>
  <div class="wrapper">
    <div class="title">
      <h3>文字入力練習</h3>
    </div>
    <div class="contents">
      <div class="text"></div>
      <div class="key-board">
        <div class="u-key">く</div>
        <div class="i-key">き</div>
        <button class="button">か</button>
        <div class="e-key">け</div>
        <div class="o-key">こ</div>
      </div>
    </div>
  </div>
</template>
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
</style>
