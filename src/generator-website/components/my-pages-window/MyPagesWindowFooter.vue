<template>
  <w-button
    class="ma1"
    bg-color="success-light1"
    color="white"
    l
    @click="dialog1.show = true"
    >Add a Page</w-button>

  <w-dialog v-model="dialog1.show" :width="700" title="Page Details">
    <w-input class="mb4" label="Name" v-model="pageName"></w-input>
    <w-input class="mb4" label="Image Src" v-model="pageImageSrc"></w-input>
    <w-textarea label="Text" v-model="pageParagraphText"></w-textarea>

    <template #actions>
      <div class="spacer" />

      <w-button @click="dialog1.show = false" bg-color="error">Close</w-button>

      <w-button @click="onAddNewPage()" bg-color="success">Add</w-button>
    </template>
  </w-dialog>

  <w-dialog v-model="dialog2.show" :width="250" title="Dialog 2">
    <w-button class="my6" @click="dialog2.show = false" bg-color="error">
      Close
    </w-button>
  </w-dialog>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { AutomaticPageData } from "@/shared/AutomaticPageData.interface";
import store from "@/shared/store/store";

export default class MyPagesWindowFooter extends Vue {
  pageName = "";
  pageImageSrc = "";
  pageParagraphText = "";
  dialog1 = { show: false };
  dialog2 = { show: false };

  onAddNewPage(): void {
      const pageToAdd: AutomaticPageData = {id: "7", name: this.pageName, imageSrc: this.pageImageSrc, paragraphText: this.pageParagraphText};
      store.commit("addNewPage", pageToAdd);
      this.dialog1.show = false;
  }
}
</script>

<style scoped>
</style>