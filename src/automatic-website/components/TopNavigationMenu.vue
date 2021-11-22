<template>
    <w-toolbar class="mt6 py1">
      <div class="top-navigation-menu">
        <div class="title3">{{ automaticWebsiteName }}</div>

        <div class="menu-items">
          <div class="menu-item" v-for="menuItem in menuItems" :key="menuItem">
            {{menuItem}}
          </div>
        </div>
      </div>
    </w-toolbar>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class TopNavigationMenu extends Vue {
  @Prop() automaticWebsiteName!: string;
  menuItems = ["Ichigo", "Rukia", "Uryu", "Orihime", "Chad"];
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
</style>