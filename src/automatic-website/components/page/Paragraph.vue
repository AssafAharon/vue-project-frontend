<template>
  <div class="paragraph">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class Paragraph extends Vue {
  @Prop() text!: string;
}
</script>

<style scoped>
.paragraph {
  display: flex;
  justify-content: center;;
}
</style>
