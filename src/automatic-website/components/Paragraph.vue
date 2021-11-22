<template>
  <p>{{ text }}</p>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class Paragraph extends Vue {
  @Prop() text!: string;
}
</script>
