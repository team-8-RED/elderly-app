<template>
  <div class="contents">
    <button class="line">
      <router-link to="/linecourse">LINE</router-link>
    </button>
    <button class="youtube">
      <router-link to="/youtubecourse">Youtube</router-link>
    </button>
    <button class="paypay">
      <router-link to="/paypaycourse">PayPay</router-link>
    </button>
    <button class="googlemap">
      <router-link to="/googlemapcourse">Google Map</router-link>
    </button>
    <button class="safari">
      <router-link to="/safaricourse">Safari</router-link>
    </button>
  </div>
</template>
<style>
.line {
  width: 100px;
  height: 40px;
  display: inline-block;
  padding: 0.6em 1em;
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(45deg, #7ab977 0%, #a2e6b6 100%);
  transition: 0.4s;
}
.line:hover {
  background-image: linear-gradient(45deg, #7ab977 50%, #b0ffca 100%);
}
.youtube {
  display: inline-block;
  padding: 0.6em 1em;
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(45deg, #7ab977 0%, #a2e6b6 100%);
  transition: 0.4s;
  width: 100px;
  height: 40px;
}
.youtube:hover {
  background-image: linear-gradient(45deg, #7ab977 50%, #b0ffca 100%);
}
.paypay {
  display: inline-block;
  padding: 0.6em 1em;
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(45deg, #7ab977 0%, #a2e6b6 100%);
  transition: 0.4s;
  width: 100px;
  height: 40px;
}
.paypay:hover {
  background-image: linear-gradient(45deg, #7ab977 50%, #b0ffca 100%);
}
.googlemap {
  display: inline-block;
  padding: 0.6em 1em;
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(45deg, #7ab977 0%, #a2e6b6 100%);
  transition: 0.4s;
  width: 100px;
  height: 40px;
}
.googlemap:hover {
  background-image: linear-gradient(45deg, #7ab977 50%, #b0ffca 100%);
}
.safari {
  display: inline-block;
  padding: 0.6em 1em;
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(45deg, #7ab977 0%, #a2e6b6 100%);
  transition: 0.4s;
  width: 100px;
  height: 40px;
}
.safari:hover {
  background-image: linear-gradient(45deg, #7ab977 50%, #b0ffca 100%);
}
</style>
