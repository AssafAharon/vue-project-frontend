<template>
  <div class="book" ref="bookDiv">
    <div class="p1 paper" ref="p1Div">
      <div class="front">
        <div class="f1 front-content">
          <h1>Front 1</h1>
        </div>
      </div>

      <div class="back">
        <div class="b1 back-content">
          <h1>Back 1</h1>
        </div>
      </div>
    </div>

    <div class="p2 paper" ref="p2Div">
      <div class="front">
        <div class="f2 front-content">
          <h1>Front 2</h1>
        </div>
      </div>

      <div class="back">
        <div class="b2 back-content">
          <h1>Back 2</h1>
        </div>
      </div>
    </div>

    <div class="p3 paper" ref="p3Div">
      <div class="front">
        <div class="f3 front-content">
          <h1>Front 3</h1>
        </div>
      </div>

      <div class="back">
        <div class="b3 back-content">
          <h1>Back 3</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Emit, Ref, Vue } from "vue-property-decorator";

export default class BookComponent extends Vue {

  currentLocation = 1;
  numOfPapers = 3;
  nextLocation = this.numOfPapers + 1;

  @Ref() bookDiv!: HTMLDivElement;

  @Ref() p1Div!: HTMLDivElement;
  @Ref() p2Div!: HTMLDivElement;
  @Ref() p3Div!: HTMLDivElement;

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
          this.p1Div.classList.add("flipped");
          this.p1Div.style.zIndex = "1";
          break;
        }
        case 2: {
          this.p2Div.classList.add("flipped");
          this.p2Div.style.zIndex = "2";
          break;
        }
        case 3: {
          this.p3Div.classList.add("flipped");
          this.p3Div.style.zIndex = "3";
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
          this.p1Div.classList.remove("flipped");
          this.p1Div.style.zIndex = "3";
          break;
        }
        case 3: {
          this.p2Div.classList.remove("flipped");
          this.p2Div.style.zIndex = "2";
          break;
        }
        case 4: {
          this.openBook();
          this.p3Div.classList.remove("flipped");
          this.p3Div.style.zIndex = "1";
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.book {
  position: relative;
  width: 350px;
  height: 500px;
  transition: transform 0.5s;
}

.paper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  perspective: 1500px;
}

.front,
.back {
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform-origin: left;
  transition: transform 0.5s;
}

.front {
  z-index: 1;
  backface-visibility: hidden;
  border-left: 1px solid pink;
}

.back {
  z-index: 0;
}

.front-content,
.back-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-content {
  transform: rotateY(180deg);
}

.p1 {
  z-index: 3;
}

.p2 {
  z-index: 2;
}

.p3 {
  z-index: 1;
}

/* Pper flip effect*/
.flipped .front,
.flipped .back {
  transform: rotateY(-180deg);
}
</style>