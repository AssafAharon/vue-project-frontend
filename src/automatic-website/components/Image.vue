<template>
  <img src=""/>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class Image extends Vue {
  @Prop() src!: string;
}
</script>