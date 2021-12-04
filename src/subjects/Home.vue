<template>
  <div class="home">
    <div class="vueper-slides-container">
      <VueperSlides autoplay :duration="5000" :arrows="false" :bullets="false" fixed-height="100vh">
        <VueperSlide
          v-for="(image, index) in images"
          :key="index"
          :image="require(`../assets/${image}`)"
        />
      </VueperSlides>
    </div>

    <div class="overlay"></div>
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
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}

.vueper-slides-container {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: transparent;
}
</style>