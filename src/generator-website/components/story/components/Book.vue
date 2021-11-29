<template>
  <div class="book" ref="bookDiv">
    <TwoSidedPageComponent :pageNumber="1" :pageZIndex="3" pageFrontSide="Front 1" pageBackSide="Back 1" ref="p1"></TwoSidedPageComponent>
    <TwoSidedPageComponent :pageNumber="2" :pageZIndex="2" pageFrontSide="Front 2" pageBackSide="Back 2" ref="p2"></TwoSidedPageComponent>
    <TwoSidedPageComponent :pageNumber="3" :pageZIndex="1" pageFrontSide="Front 3" pageBackSide="Back 3" ref="p3"></TwoSidedPageComponent>
  </div>
</template>

<script lang="ts">

import { Emit, Options, Ref, Vue } from "vue-property-decorator";
import TwoSidedPageComponent from "./TwoSidedPage.vue";

@Options({
  components: {
    TwoSidedPageComponent
  }
})
export default class BookComponent extends Vue {

  currentLocation = 1;
  numOfPapers = 3;
  nextLocation = this.numOfPapers + 1;

  @Ref() bookDiv!: HTMLDivElement;

  @Ref() p1!: TwoSidedPageComponent;
  @Ref() p2!: TwoSidedPageComponent;
  @Ref() p3!: TwoSidedPageComponent;

  @Emit()
  openBook(): boolean {
    this.bookDiv.style.transform = "translateX(50%)";
    return true;
  }

  @Emit()
  closeBook(isAtBeginning: boolean): boolean {
    if (isAtBeginning) {
      this.bookDiv.style.transform = "translateX(0%)";
    }
    else {
      this.bookDiv.style.transform = "translateX(100%)";
    }

    return false;
  }

  onGoNextPage(): void {
    if (this.currentLocation < this.nextLocation) {
      switch (this.currentLocation) {
        case 1: {
          this.openBook();
          this.p1.flipToNextPage();
          break;
        }
        case 2: {
          this.p2.flipToNextPage();
          break;
        }
        case 3: {
          this.p3.flipToNextPage();
          this.closeBook(false);
          break;
        }
        default: {
          break;
        }
      }

      this.currentLocation++;
    }
  }

  onGoPrevPageChanged(): void {
    if (this.currentLocation > 1) {
      switch (this.currentLocation) {
        case 2: {
          this.closeBook(true);
          this.p1.flipToPrevPage();
          break;
        }
        case 3: {
          this.p2.flipToPrevPage();
          break;
        }
        case 4: {
          this.openBook();
          this.p3.flipToPrevPage();
          break;
        }
        default: {
          break;
        }
      }

      this.currentLocation--;
    }
  }

}
</script>

<style scoped>


.book {
  position: relative;
  width: 350px;
  height: 500px;
  transition: transform 0.5s;
}













</style>