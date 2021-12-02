<template>
  <div class="edit-your-book">
    <div class="left-section">
      <div class="page-editor-container">
        <PageEditor :pageToDisplay="pageToDisplay"></PageEditor>
      </div>

      <ItemBoxComponent></ItemBoxComponent>
    </div>

    <div class="right-section">
      <PageBox @onPageClick="displaySelectedPage"></PageBox>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/shared/store/store";
import { Options, Vue } from "vue-property-decorator";
import PageBox from "./components/PageBox.vue";
import PageEditor from "./components/PageEditor.vue"
import ItemBoxComponent from "./components/ItemBox.vue";
import Book from "../story/entities/Book.class";
import Page from "../story/entities/Page.class";

@Options({
  components: {
    PageBox,
    PageEditor,
    ItemBoxComponent
  }
})
export default class EditYourBookComponent extends Vue {
  book: Book = store.getters.book;
  pageToDisplay: Page = this.book.pages[0] || null;

  displaySelectedPage(selectedPage: Page): void {
    this.pageToDisplay = {
      pageNumber: selectedPage.pageNumber,
      items: [...selectedPage.items] 
      };
  }
}
</script>

<style scoped>
.edit-your-book {
  height: calc(100vh - 90px);
  display: flex;
  justify-content: space-between;
  background: #ffe8d1;
}

.left-section {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.page-editor-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-section {
  width: 10%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>