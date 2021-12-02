<template>
  <p ref="text">{{ text }}</p>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class TextComponent extends Vue {

  @Prop() text!: string;
}
</script>

<style scoped>
p {
  width: 100%;
  height: 100%;
}
</style>