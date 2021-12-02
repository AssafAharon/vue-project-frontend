<template>
  <div v-if="pageToDisplay" class="page-editor">
    <div class="drop-zone" @drop="onDrop($event)" @dragenter.prevent @dragover.prevent></div>

    <ImageComponent v-for="(image, index) in pageToDisplay.items" :key="index" :image="image"></ImageComponent>

    <w-button @click="savePage" bg-color="success">Save</w-button>

    <router-link to="/Preview">
      <w-button bg-color="info">Preview</w-button>
    </router-link>
  </div>

  <div v-if="!pageToDisplay" class="page-adder">
    <p>Add a Page</p>
  </div>
</template>

<script lang="ts">
import store from "@/shared/store/store";
import Item from "@/subjects/story/entities/items/Item.class";
import Page from "@/subjects/story/entities/Page.class";
import { Options, Prop, Vue } from "vue-property-decorator";
import ImageComponent from "../../story/components/Image.vue";

@Options({
  components: {
    ImageComponent
  }
})
export default class PageEditorComponent extends Vue {

  @Prop() pageToDisplay!: Page;

  onDrop(event: DragEvent): void {
    if (!event.dataTransfer) {
      return;
    }

    const droppedItem: Item = JSON.parse(event.dataTransfer.getData("image"));
    const initialMouseOffsets = JSON.parse(event.dataTransfer.getData("initialMouseOffsets"));
    this.pageToDisplay.items.push({ ...droppedItem, top: (event.offsetY - initialMouseOffsets.offsetY), left: (event.offsetX - initialMouseOffsets.offsetX), zIndex: 0 });
  }

  savePage(): void {
    store.commit("savePage", this.pageToDisplay);
  }
}
</script>

<style scoped>
.page-editor {
  width: 600px;
  height: 700px;
  position: relative;
  background: white;
}

.drop-zone {
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  z-index: 1;
}

.page-adder {
  width: 600px;
  height: 700px;
}
</style>
