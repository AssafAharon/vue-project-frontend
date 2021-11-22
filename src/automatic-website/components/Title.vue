<template>
  <h2>{{ text }}</h2>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class Title extends Vue {
  @Prop() text!: string;
}
</script>