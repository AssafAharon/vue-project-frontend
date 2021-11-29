<template>
  <div class="automatic-website-title">
    <h1>Automatic Website</h1>
    <router-link to="/GeneratorWebsite/WebsiteCreation">
      <w-button bg-color="info">Go Back</w-button>
    </router-link>

    <router-link to="/AutomaticWebsite/Chat">
      <w-button bg-color="warning-light2">Chat</w-button>
    </router-link>
  </div>
  
  <TopNavigationMenu :topNavigationMenuProps="navigationMenuProps" @onMenuItemClick="updatePageData"></TopNavigationMenu>
  <!-- <Page :pageProps="currentPageProps"></Page> -->
  <router-view :pageProps="currentPageProps"></router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import TopNavigationMenu from "./TopNavigationMenu.vue";
import Page from "./page/Page.vue";
import { AutomaticNavigationMenuData, AutomaticPageMetadata } from "../entities/AutomaticNavigationMenuData";
import store from "@/shared/store/store";
import { AutomaticWebsiteData } from "@/shared/entities/AutomaticWebsiteData.interface";
import { AutomaticPageData } from "@/shared/entities/AutomaticPageData.interface";

@Options({
  components: {
    TopNavigationMenu,
    Page
  }
})
export default class AutomaticWebsite extends Vue {
  websiteData: AutomaticWebsiteData = store.getters.automaticWebsiteData;
  currentPageProps: AutomaticPageData = this.websiteData.allPagesData[0];

  get navigationMenuProps(): AutomaticNavigationMenuData {
    const navigationMenuPagesMetadata = this.websiteData.allPagesData.map(currentPageProps => { 
      return { pageId: currentPageProps.id, pageName: currentPageProps.name}
    });
    return { websiteName: this.websiteData.websiteName, pagesMetadata: navigationMenuPagesMetadata };
  }

  updatePageData(pageMetadata: AutomaticPageMetadata): void {
    this.currentPageProps = this.websiteData.allPagesData.find(currentPageProps => currentPageProps.id === pageMetadata.pageId)
    ||
    {id: "", name: "", imageSrcs: [""], paragraphTexts: [""]};
  }
}
</script>

<style scoped>
.automatic-website-title {
  display: flex;
}
</style>