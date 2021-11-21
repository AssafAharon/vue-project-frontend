<template>
  <w-button
    class="ma1"
    bg-color="success-light1"
    color="white"
    l
    @click="dialog1.show = true"
    >Add a Page</w-button>

  <w-dialog v-model="dialog1.show" :width="700" title="Page Details">
    <w-input class="mb4" label="Title" v-model="title"></w-input>

    <w-input class="mb4" label="Body" v-model="body"></w-input>

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
import { Page } from "../../classes/Page.class";
import store from "../../store/store";

export default class MyPagesWindowFooter extends Vue {
  public title = "";
  public body = "";
  public dialog1 = { show: false };
  public dialog2 = { show: false };

  onAddNewPage(): void {
      const pageToAdd: Page = new Page(this.title, this.body);
      store.commit("addNewPage", pageToAdd);
      console.log(store.getters.myPages);
  }
}
</script>

<style scoped>
</style>