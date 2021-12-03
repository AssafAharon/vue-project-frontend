<template>
  <div ref="navigation" class="navigation">
    <div ref="navigation-links" class="navigation-links">
      <p>lala</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class NavigationComponent extends Vue {
  open(): void {
    const navigationDiv: HTMLDivElement = this.$refs["navigation"] as HTMLDivElement;
    navigationDiv.classList.add("show");
  }

  close(): void {
    const navigationDiv: HTMLDivElement = this.$refs["navigation"] as HTMLDivElement;
    navigationDiv.classList.remove("show");
  }
}
</script>

<style scoped>
.navigation {
  width: 100vw;
  height: 100vh;
  max-height: 0vh;
  position: absolute;
  z-index: 0;
  background: black;
  opacity: 0.8;
  transition: 0.2s linear;
}

.show {
  max-height: 100vh;
  overflow: hidden;
  transition: 0.2s linear;
}

.navigation-links {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color:ivory;
}
</style>