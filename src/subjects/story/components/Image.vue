<template>
  <div ref="image" class="image" :style="positionStyle" @dragstart="onDragStart($event)">
    <img :src="image.src" />
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Image from "../entities/items/Image.class";

export default class ImageComponent extends Vue {

  @Prop() image!: Image;

  positionStyle = `
  width: ${this.image.width}px;
  height: ${this.image.height}px;
  top: ${this.image.top}px;
  left: ${this.image.left}px;
  z-index: ${this.image.zIndex}`;

  onDragStart = (event: DragEvent): void => {
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("image", JSON.stringify(this.image));
      event.dataTransfer.setData("initialMouseOffsets", JSON.stringify({offsetY: event.offsetY, offsetX: event.offsetX}));
    }
  }
}
</script>

<style scoped>
.image {
  position: absolute;
}

img {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>