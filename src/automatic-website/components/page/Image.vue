<template>
  <div class="image">
    <img :src="src" width="400" height="400"/>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class Image extends Vue {
  @Prop() src!: string;
}
</script>

<style scoped>
  .image {
    display: flex;
    justify-content: center;;
  }
</style>