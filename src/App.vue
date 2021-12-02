<template>
  <w-app>

    <TopNavigationMenu></TopNavigationMenu>

    <router-view></router-view>

  </w-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import TopNavigationMenu from './subjects/TopNavigationMenu.vue';

@Options({
  components: {
    TopNavigationMenu
  }  
})
export default class App extends Vue {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>
