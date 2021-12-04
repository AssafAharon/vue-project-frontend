<template>
  <div class="home">
    <VueperSlides autoplay :duration="5000" :arrows="false" :bullets="false" fixedHeight="100%">
      <VueperSlide v-for="index in 3" :key="index" :title="index.toString()" />
    </VueperSlides>
    <img :src="require(`../assets/${images[2]}`)" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';


@Options({
  components: {
    VueperSlides, VueperSlide
  }
})
export default class Home extends Vue {
  images: string[] = [
    "img1.png",
    "img2.png",
    "img3.jpg"
  ];

  getImgUrl(src: string) {
    const images = require.context("../assets/", false, /\.png$/);
    return images("./" + src);
  }

}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.vueperslide {
  background: linear-gradient(-45deg, #faa990, #e691b1, #b0dff0, #c5ebe2);
}
</style>