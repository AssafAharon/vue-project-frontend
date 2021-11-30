<template>
  <div class="image" @dragstart="onDragStart($event)">
    <img :src="image.src" />
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Image from "../entities/items/image.class";

export default class ImageComponent extends Vue {

  @Prop() image!: Image;

  onDragStart = (event: DragEvent): void => {
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("image", JSON.stringify(this.image));
    }
  }


}
</script>

<style scoped>
.image {
  width: 100px;
  height: 100px;
}

img {
  width: 100%;
  height: 100%;
}
</style>