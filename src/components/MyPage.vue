<template>
<div class="my-page" v-html="htmlTemplate"></div>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import { Page } from "@/classes/Page.class";

export default class MyPage extends Vue {
  @Prop() page: Page = new Page("", "");

  get htmlTemplate() : string {
    return `<h1> ${this.page.title} </h1><p> ${this.page.body} </p>`
  }
}
</script>

<style scoped>
  .my-page {
    border: 2px solid black;
  }
</style>
