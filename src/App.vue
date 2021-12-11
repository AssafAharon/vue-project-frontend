<template>
  <w-app>
    <div class="app">
      <HeaderComponent
        ref="headerComponent"
        @openNavigation="onOpenNavigation"
        @closeNavigation="onCloseNavigation"
      ></HeaderComponent>
      <NavigationComponent ref="navigationComponent" @close="onNavigationClosed"></NavigationComponent>

      <div class="app-view">
        <router-view></router-view>
      </div>
    </div>
  </w-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import HeaderComponent from "./subjects/Header.vue";
import NavigationComponent from "./subjects/navigation/Navigation.vue";

@Options({
  components: {
    HeaderComponent,
    NavigationComponent
  }
})
export default class App extends Vue {

  onOpenNavigation(): void {
    const navigation: NavigationComponent = this.$refs["navigationComponent"] as NavigationComponent;
    navigation.open();
  }

  onCloseNavigation(): void {   //Called when we close navigation from Header 
    const navigation: NavigationComponent = this.$refs["navigationComponent"] as NavigationComponent;
    navigation.close();
  }

  onNavigationClosed(): void {   //Called when we clicked a link in Navigation
    const header: HeaderComponent = this.$refs["headerComponent"] as HeaderComponent;
    header.restoreDefaultHeaderItems();
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

body {
  font-family: "Poppins", sans-serif;
}

.app-view {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}
</style>
