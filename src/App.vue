<template>
  <w-app>
    <div class="app">
      <Header @openNavigation="onOpenNavigation" @closeNavigation="onCloseNavigation"></Header>
      <NavigationComponent ref="navigationComponent"></NavigationComponent>

      <router-view></router-view>
    </div>
  </w-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import Header from "./subjects/Header.vue";
import NavigationComponent from "./subjects/Navigation.vue";

@Options({
  components: {
    Header,
    NavigationComponent
  }
})
export default class App extends Vue {
  onOpenNavigation(): void {
    const navigation: NavigationComponent = this.$refs["navigationComponent"] as NavigationComponent;
    navigation.open();
  }

  onCloseNavigation(): void {
    const navigation: NavigationComponent = this.$refs["navigationComponent"] as NavigationComponent;
    navigation.close();
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

body {
  font-family: "Poppins", sans-serif;
}

.app {
  position: relative;
}
</style>
