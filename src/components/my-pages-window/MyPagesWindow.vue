<template>
  <div class="window">
    <div class="window-body">
      <!-- <div v-for="page in myPages" :key="page">
        <Page :page="page"></Page>
      </div> -->
      <MyPage :page="examplePage"> </MyPage>
    </div>

    <div class="window-footer">
      <MyPagesWindowFooter></MyPagesWindowFooter>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";
import MyPagesWindowFooter from "./MyPagesWindowFooter.vue";
import MyPage from "../MyPage.vue";
import { Page } from "@/classes/Page.class";

@Options({
  components: {
    MyPage,
    MyPagesWindowFooter
  }
})
export default class MyPagesWindow extends Vue {
  examplePage: Page = {
    title: "Soi Fon",
    body: "Bankai! Jakuho Raikoben!"
  };
}
</script>

<style scoped>
.window {
  width: 500px;
  height: 500px;
  border: 2px solid black;
}

.window-body {
  height: 94%;
}

.window-footer {
  height: 6%;
  display: flex;
  justify-content: flex-end;
}
</style>