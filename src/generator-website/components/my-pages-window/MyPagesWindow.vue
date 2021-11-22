<template>
  <div class="window">
    <div class="window-body">
      <div class="page" v-for="page in myPages" :key="page.name">
        <MyPage :page="page"> </MyPage>
      </div>
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
import { Page } from "@/shared/Page.class";
import store from "@/shared/store/store";

@Options({
  components: {
    MyPage,
    MyPagesWindowFooter
  }
})
export default class MyPagesWindow extends Vue {

  myPages: Page[] = store.getters.myPages;
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
  overflow-y: scroll;
}

.window-footer {
  height: 6%;
  display: flex;
  justify-content: flex-end;
}
</style>