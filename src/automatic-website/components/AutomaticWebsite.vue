<template>
  <h1>Automatic Website</h1>
  <TopNavigationMenu :automaticWebsiteName="name"></TopNavigationMenu>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import TopNavigationMenu from "./TopNavigationMenu.vue";

@Options({
  components: {
    TopNavigationMenu
  }
})
export default class AutomaticWebsite extends Vue {
  name = "Bleach";
}
</script>