<template>
  <p ref="text">{{ text }}</p>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

import Rectangle from "../entities/Rectangle.class";


export default class TextComponent extends Vue {

  @Prop() text!: string;

  resize(newRect: Rectangle): void {
    //const textParagraph: HTMLParagraphElement = this.$refs["text"] as HTMLParagraphElement;
    console.log(newRect);
  }
}

</script>

<style scoped>
p {
  width: 100%;
  height: 100%;
}
</style>