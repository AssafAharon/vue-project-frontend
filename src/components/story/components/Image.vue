<template>
  <div class="image">
    <img :src="src" />
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class ImageComponent extends Vue {

  @Prop() src!: string;

  isActive = false;

  onClicked(): void {
    this.isActive = true;
  }

}
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}
</style>