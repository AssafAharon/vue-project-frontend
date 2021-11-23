<template>
    <w-toolbar class="mt6 py1">
      <div class="top-navigation-menu">
        <div class="title3">{{ topNavigationMenuProps.websiteName }}</div>

        <div class="menu-items">
          <div :style="customWidth" class="menu-item" v-for="menuItem in topNavigationMenuProps.pagesMetadata" :key="menuItem.pageId" @click="onMenuItemClick(menuItem)">
            {{menuItem.pageName}}
          </div>
        </div>
      </div>
    </w-toolbar>
</template>

<script lang="ts">
import { Emit, Prop, Vue } from "vue-property-decorator";
import { AutomaticNavigationMenuData, AutomaticPageMetadata } from "../entities/AutomaticNavigationMenuData";

export default class TopNavigationMenu extends Vue {
  @Prop() topNavigationMenuProps!: AutomaticNavigationMenuData;
  customWidth = `width: calc(100% / ${this.topNavigationMenuProps.pagesMetadata.length})`;

  @Emit()
  onMenuItemClick(menuItem: AutomaticPageMetadata): AutomaticPageMetadata {
    return menuItem;
  }
}
</script>

<style scoped>
  .top-navigation-menu {
    width: 100vw;
    display: flex;
  }

  .title3 {
    width: 5%;
  }

  .menu-items {
    width: 95%;
    display: flex;
    justify-content: space-evenly;
  }

  .menu-item {
    display: flex;
    justify-content: center;
  }

  .menu-item:hover {
    background: #FAF0E6;
    cursor: pointer;
  }
</style>