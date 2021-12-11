<template>
  <div class="header">
    <div ref="left-side" class="clickable unbleached">
      <router-link to="/">
        <h1>𝒩</h1>
      </router-link>
    </div>

    <div ref="right-side" class="clickable">
      <div v-if="!isNavigationActive" class="hamburger" @click="openNavigation"></div>
      <h1 v-if="isNavigationActive" class="x" @click="closeNavigation">X</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Emit, Vue } from "vue-property-decorator";

export default class HeaderComponent extends Vue {
  isNavigationActive = false;

  @Emit()
  openNavigation(): void {
    this.isNavigationActive = true;
    const leftSideDiv = this.$refs["left-side"] as HTMLDivElement;
    const rightSideDiv = this.$refs["right-side"] as HTMLDivElement;
    leftSideDiv.classList.add("bleached");
    rightSideDiv.classList.add("bleached");
  }

  @Emit()
  closeNavigation(): void {
    this.restoreDefaultHeaderItems();
  }

  restoreDefaultHeaderItems(): void {
    this.isNavigationActive = false;
    const leftSideDiv = this.$refs["left-side"] as HTMLDivElement;
    const rightSideDiv = this.$refs["right-side"] as HTMLDivElement;
    leftSideDiv.classList.remove("bleached");
    rightSideDiv.classList.remove("bleached");
  }
}
</script>

<style scoped>
.header {
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;
  font-size: 30px;
  padding-left: 25px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.unbleached {
  background: #4b3d8f;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.clickable :hover {
  cursor: pointer;
}

.hamburger {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background: #4b3d8f;
  border-radius: 50%;
}

.x {
  margin-right: 25px;
}

.bleached {
  background: linear-gradient(120deg, #d7a9e3ff, #8bbee8ff, #a8d5baff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>