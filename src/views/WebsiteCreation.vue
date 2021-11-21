<template>
  <h3>My Pages</h3>

  <MyPagesWindow></MyPagesWindow>

  <router-link to="/">Go Back</router-link>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";
import MyPagesWindow from "../components/my-pages-window/MyPagesWindow.vue";

@Options({
  components: {
    MyPagesWindow
  }
})
export default class WebsiteCreation extends Vue {
  
}
</script>

<style scoped>

</style>