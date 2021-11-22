<template>
  <h1>Generator Website</h1>
  <router-link to="/GeneratorWebsite/WebsiteCreation">
    <w-button bg-color="success">Create a New Website!</w-button>
  </router-link>

  <router-view></router-view>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Home extends Vue {

}
</script>

<style scoped>
</style>