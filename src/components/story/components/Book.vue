<template>
  <div class="book" ref="bookDiv">
    <Paper
      v-for="paper in book.papers"
      :key="paper.paperNumber"
      :paperNumber="paper.paperNumber"
      :paperZIndex="book.papers.length - paper.paperNumber + 1"
      :frontPage="paper.frontPage"
      :backPage="paper.backPage"
      :ref="`p${paper.paperNumber}`"
    ></Paper>
  </div>
</template>

<script lang="ts">
import { Emit, Options, Ref, Vue } from "vue-property-decorator";
import Book from "../entities/Book.class";
import Paper from "./Paper.vue";

@Options({
  components: {
    Paper
  }
})
export default class BookComponent extends Vue {
  book: Book = {
    papers: [
      {
        paperNumber: 1,
        frontPage: {
          items: []
        },
        backPage: {
          items: []
        }
      },
      {
        paperNumber: 2,
        frontPage: {
          items: []
        },
        backPage: {
          items: []
        }
      }
    ]
  };
  currentLocation = 1;
  nextLocation = this.book.papers.length + 1;

  @Ref() bookDiv!: HTMLDivElement;

  @Emit()
  openBook(): void {
    this.bookDiv.style.transform = "translateX(50%)";
  }

  @Emit()
  closeBook(isAtBeginning: boolean): void {
    if (isAtBeginning) {
      this.bookDiv.style.transform = "translateX(0%)";
    }
    else {
      this.bookDiv.style.transform = "translateX(100%)";
    }
  }

  onGoNextPage(): void {
    if (this.currentLocation < this.nextLocation) {
      const currentPaper = this.$refs[`p${this.currentLocation}`] as Paper;
      if (this.currentLocation === 1) {
        this.openBook();
        currentPaper.flipToNextPage();
      } else if (this.currentLocation === this.book.papers.length) {
        currentPaper.flipToNextPage();
        this.closeBook(false);
      }
      else {
        currentPaper.flipToNextPage();
      }

      this.currentLocation++;
    }
  }

  onGoPrevPageChanged(): void {
    if (this.currentLocation > 1) {
      const currentPaper = this.$refs[`p${this.currentLocation - 1}`] as Paper;
      if (this.currentLocation === 2) {
        this.closeBook(true);
        currentPaper.flipToPrevPage();
      } else if (this.currentLocation === this.book.papers.length + 1) {
        this.openBook();
        currentPaper.flipToPrevPage();
      }
      else {
        currentPaper.flipToPrevPage();
      }

      this.currentLocation--;
    }
  }

}
</script>

<style scoped>
.book {
  position: relative;
  width: 600px;
  height: 700px;
  transition: transform 0.5s;
}
</style>