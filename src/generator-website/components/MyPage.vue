<template>
  <div class="my-page" v-html="htmlTemplate"></div>
</template>

<script lang="ts">
import { AutomaticPageData } from "@/shared/AutomaticPageData.interface";
import { Vue, Prop } from "vue-property-decorator";


export default class MyPage extends Vue {
  @Prop() page!: AutomaticPageData;

  get htmlTemplate() : string {
    return `<h2> ${this.page.name} </h2>`
  }
}
</script>

<style scoped>
  .my-page {
    border: 2px solid black;
  }
</style>
