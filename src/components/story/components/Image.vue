<template>
  <div ref="image" class="image" :style="positionStyle" @dragstart="onDragStart($event)">
    <img :src="image.src" />
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Image from "../entities/items/image.class";

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









// function drag(ev) {
//     ev.dataTransfer.setData("application/json", 
//     JSON.stringify([ev.target.id, 
//         (ev.offsetX || ev.clientX - $(ev.target).offset().left),
//         (ev.offsetY || ev.clientY - $(ev.target).offset().top)]
//     ));
// }
    
// function drop(ev) {
//     ev.preventDefault();
//     var data = JSON.parse(ev.dataTransfer.getData("application/json"));
//     ev.target.appendChild(document.getElementById(data[0]));
//     //window.alert( ev.clientX + ',' + ev.clientY);
//     document.getElementById("drag1")
//         .style.left = ev.clientX - data[1] + 'px';
//         document.getElementById("drag1").style.top = ev.clientY - data[2] + 'px';
//     return false;
// }

















}
</script>

<style scoped>
.image {
  position: absolute;
}

img {
  width: 100%;
  height: 100%;
}
</style>