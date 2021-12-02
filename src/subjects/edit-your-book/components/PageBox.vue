<template>
  <div class="page-box">
    <div v-for="(page, index) in pages" :key="index" @click="onPageClick(page)" class="page" :style="pageTopPosition(index)">
      <ImageComponent v-for="(image, index) in shrunkItems(page, 5)" :key="index" :image="image"></ImageComponent>
    </div>
  </div>
  <w-button @click="addPage" bg-color="info">+</w-button>
</template>

<script lang="ts">
import store from "@/shared/store/store";
import Item from "@/subjects/story/entities/items/Item.class";
import Page from "@/subjects/story/entities/Page.class";
import { Emit, Options, Vue } from "vue-property-decorator";
import ImageComponent from "../../story/components/Image.vue";

@Options({
  components: {
    ImageComponent
  }
})
export default class PageBoxComponent extends Vue {
  pages: Page[] = store.getters.book.pages;

  pageTopPosition = (pageNumber: number): string => `top: ${pageNumber * 140 + (pageNumber + 1) * 15}px`;

  shrunkItems(page: Page, shrinkRatio: number): Item[] {
    return page.items.map(item => {
      return {
        ...item,
        top: item.top / shrinkRatio,
        left: item.left / shrinkRatio,
        width: item.width / 5,
        height: item.height / 5
      }
    });
  }

  addPage(): void {
    store.commit("addPage");
  }

  @Emit()
  onPageClick(clickedPage: Page): Page {
    return clickedPage;
  }
}
</script>

<style scoped>
.page-box {
  width: 100%;
  height: 85%;
  background: #826251;
  position: relative;
  overflow-y: auto;
}

.page {
  width: 120px;
  height: 140px;
  position: absolute;
  left: 20%;
  background: white;

}

div :hover {
  cursor: pointer;
}
</style>