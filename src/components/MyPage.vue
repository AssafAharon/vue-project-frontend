<template>
  <div class="my-page" v-html="htmlTemplate"></div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import { Page } from "@/shared/Page.class";

export default class MyPage extends Vue {
  @Prop() page: Page = new Page("");

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
