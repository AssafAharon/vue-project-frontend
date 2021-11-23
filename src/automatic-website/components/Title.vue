<template>
  <div class="title">
    <h2>{{ text }}</h2>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class Title extends Vue {
  @Prop() text!: string;
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;;
}
</style>