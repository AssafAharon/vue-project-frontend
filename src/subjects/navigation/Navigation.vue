<template>
  <div ref="navigation" class="navigation">
    <div class="navigation-links">
      <div class="lulu" ref="navigation-links">
        <router-link v-for="(link, index) in links" :key="index" :to="link.pathTo">
          <div class="lala" @click="onLinkClicked">{{ link.label }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Emit, Vue } from "vue-property-decorator";
import NavigationLink from "./NavigationLink.class";

export default class NavigationComponent extends Vue {
  links: NavigationLink[] = [
    {
      label: "Create a Narrative",
      pathTo: "/CreateNarrative"
    },
    {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    },
       {
      label: "Edit Existing Narrative",
      pathTo: "/EditYourBook"
    }
  ];

  open(): void {
    const navigationDiv: HTMLDivElement = this.$refs["navigation"] as HTMLDivElement;
    navigationDiv.classList.add("show");
    const navigationLinksUL: HTMLUListElement = this.$refs["navigation-links"] as HTMLUListElement;
    navigationLinksUL.classList.add("show");
  }

  @Emit()
  close(): void {
    const navigationDiv: HTMLDivElement = this.$refs["navigation"] as HTMLDivElement;
    navigationDiv.classList.remove("show");
    const navigationLinksUL: HTMLUListElement = this.$refs["navigation-links"] as HTMLUListElement;
    navigationLinksUL.classList.remove("show");
  }

  onLinkClicked(): void {
    this.close();
  }
}
</script>

<style scoped>
.navigation {
  width: 100vw;
  height: 100vh;
  max-height: 0%;
  position: absolute;
  z-index: 1;
  background: black;
  opacity: 0.8;
  transition: 0.2s linear;
}

.show {
  max-height: 100%;
  transition: 0.2s linear;
}

.navigation-links {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lulu {
  list-style-type: none;
  max-height: 0%;
  overflow: hidden;
  transition: 0.2s linear;
}

.lala {
  display: flex;
  justify-content: center;
  font-size: 30px;
  background: linear-gradient(120deg, #d7a9e3ff, #8bbee8ff, #a8d5baff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>