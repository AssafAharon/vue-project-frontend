<template>
  <div :class="pageHTMLClass" :ref="pageHTMLRef" :style="pageStyle">
    <div class="front">
      <div class="front-content">
        <h1>{{ pageFrontSide }}</h1>
      </div>
    </div>

    <div class="back">
      <div class="back-content">
        <h1>{{ pageBackSide }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";

export default class TwoSidedPageComponent extends Vue {
  @Prop() pageNumber!: number;
  @Prop() pageZIndex!: number;
  @Prop() pageFrontSide!: string;
  @Prop() pageBackSide!: string;
  @Prop() pageZIndexForPrevFlip!: string;

  get pageHTMLClass(): string {
    return `p${this.pageNumber} paper`;
  }

  get pageHTMLRef(): string {
    return `p${this.pageNumber}Div`;
  }

  get pageStyle(): string {
    return `
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      perspective: 1500px;
      z-index: ${this.pageZIndex}`;
  }

  flipToPrevPage(): void {
    const pageDiv: HTMLDivElement = this.$refs[this.pageHTMLRef] as HTMLDivElement;
    pageDiv.classList.remove("flipped");
    pageDiv.style.zIndex = this.pageZIndex.toString();
  }

  flipToNextPage(): void {
    const pageDiv: HTMLDivElement = this.$refs[this.pageHTMLRef] as HTMLDivElement;
    pageDiv.classList.add("flipped");
    pageDiv.style.zIndex = this.pageNumber.toString();
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