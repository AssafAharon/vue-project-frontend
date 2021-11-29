<template>
  <div :class="paperHTMLClass" :ref="paperHTMLRef" :style="paperStyle">
    <div class="front">
      <div class="front-content">
        <h1>{{ paperFrontSide.pageDetails }}</h1>
      </div>
    </div>

    <div class="back">
      <div class="back-content">
        <h1>{{ paperBackSide.pageDetails }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Page from "../entities/Page.class";

export default class PaperComponent extends Vue {
  @Prop() paperNumber!: number;
  @Prop() paperZIndex!: number;
  @Prop() paperFrontSide!: Page;
  @Prop() paperBackSide!: Page;
  @Prop() paperZIndexForPrevFlip!: string;

  get paperHTMLClass(): string {
    return `p${this.paperNumber} paper`;
  }

  get paperHTMLRef(): string {
    return `p${this.paperNumber}Div`;
  }

  get paperStyle(): string {
    return `
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      perspective: 1500px;
      z-index: ${this.paperZIndex}`;
  }

  flipToPrevPage(): void {
    const pageDiv: HTMLDivElement = this.$refs[this.paperHTMLRef] as HTMLDivElement;
    pageDiv.classList.remove("flipped");
    pageDiv.style.zIndex = this.paperZIndex.toString();
  }

  flipToNextPage(): void {
    const pageDiv: HTMLDivElement = this.$refs[this.paperHTMLRef] as HTMLDivElement;
    pageDiv.classList.add("flipped");
    pageDiv.style.zIndex = this.paperNumber.toString();
  }
}
</script>

<style scoped>
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
  border-left: 1px solid #ffe8d1;
}

.back {
  z-index: 0;
}

.front-content,
.back-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.back-content {
  transform: rotateY(180deg);
}

/* Paper flip effect*/
.flipped .front,
.flipped .back {
  transform: rotateY(-180deg);
}
</style>