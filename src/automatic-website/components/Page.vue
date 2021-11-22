<template>
  <Title :text="titleText"></Title>
  <Image :src="imageSrc"></Image>
  <Paragraph :text="paragraphText"></Paragraph>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import Title from "./Title.vue";
import Paragraph from "./Paragraph.vue";
import Image from "./Image.vue";

@Options({
  components: {
    Title,
    Image,
    Paragraph
  }
})
export default class Page extends Vue {
  titleText: string = "";
  imageSrc: string = "";
  paragraphText: string = "";
}
</script>