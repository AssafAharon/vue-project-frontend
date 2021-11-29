<template>
  <!-- <router-link to="/GeneratorWebsite/WebsiteCreation">
    <w-button bg-color="success">Create a New Website!</w-button>
  </router-link>

  <router-view></router-view>-->
  <div class="home">
    <div></div>

    <div class="story-container">
      <div class="prev-button" ref="prevButtonDiv">
        <w-button @click="onPrevButtonClicked">[--</w-button>
      </div>

      <BookComponent ref="bookComponent" @openBook="onOpenBook()" @closeBook="onCloseBook()"></BookComponent>

      <div class="next-button" ref="nextButtonDiv">
        <w-button @click="onNextButtonClicked">--]</w-button>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script lang="ts">
import { Options, Ref, Vue } from "vue-property-decorator";
import BookComponent from "./story/components/Book.vue";

@Options({
  components: {
    BookComponent
  }
})
export default class Home extends Vue {

  @Ref() bookComponent!: BookComponent;

  @Ref() prevButtonDiv!: HTMLDivElement;
  @Ref() nextButtonDiv!: HTMLDivElement;

  onOpenBook(): void {
    this.prevButtonDiv.style.transform = "translateX(-180px)";
    this.nextButtonDiv.style.transform = "translateX(180px)";
  }

  onCloseBook(): void {
    this.prevButtonDiv.style.transform = "translateX(0px)";
    this.nextButtonDiv.style.transform = "translateX(0px)";
  }

  onPrevButtonClicked(): void {
    this.bookComponent.onGoPrevPageChanged();
  }

  onNextButtonClicked(): void {
    this.bookComponent.onGoNextPage();
  }
}
</script>

<style scoped>
.home {
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: pink;
}

.story-container {
  display: flex;
  justify-content: center;
}

.prev-button,
.next-button {
  display: flex;
  transition: transform 0.5s;
}
</style>