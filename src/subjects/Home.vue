<template>
  <div class="home">
    <div class="underlay">
      <div class="content-container">
        <div class="content-header">
          <div></div>
          <div class="content-header-slogens">
            <h1>Narrative</h1>
            <p>Tell Us Your Story!</p>
          </div>
          <div></div>
          <div></div>
          <img :src="require(`../assets/${bookImage}`)" />
          <div></div>
        </div>
        <div></div>
      </div>

      <div class="gradient-container">
        <div class="gradient"></div>
      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";


@Options({
  components: {
  }
})
export default class Home extends Vue {
  bookImage = "result-4.png";
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.underlay {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
}

.content-container {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.content-header {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}

.content-header-slogens {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  display: flex;
  align-items: center;
  font-size: 100px;
  background: linear-gradient(120deg, #d7a9e3ff, #8bbee8ff, #a8d5baff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  color: #4b3d8f;
}

img {
  width: 35vw;
  height: 40vh;
  margin-top: 15vh;
}

.gradient-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.gradient {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 45vh;
  left: 23vw;
  background: linear-gradient(120deg, #d7a9e3ff, #8bbee8ff, #a8d5baff);
  transform: rotate(-35deg);
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: transparent;
}
</style>