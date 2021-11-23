<template>
  <div class="page">
    <Title :text="pageProps.name"></Title>
    <Image :src="pageProps.imageSrc"></Image>
    <Paragraph :text="pageProps.paragraphText"></Paragraph>   
  </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";
import Title from "./Title.vue";
import Paragraph from "./Paragraph.vue";
import Image from "./Image.vue";
import { AutomaticPageData } from "@/shared/AutomaticPageData.interface";


@Options({
  components: {
    Title,
    Image,
    Paragraph
  }
})
export default class Page extends Vue {
  @Prop() pageProps!: AutomaticPageData;
}
</script>

<style scoped>
.page {
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>