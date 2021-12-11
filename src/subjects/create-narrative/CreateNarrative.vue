<template>
  <div class="create-narrative">
    <div class="narrative-configurations">
      <w-card :title="configurations[0].title">
        <w-input class="mb4" :label="configurations[0].content" static-label></w-input>
      </w-card>

      <w-card :title="configurations[1].title">
        <w-textarea no-autogrowrows="5" :label="configurations[1].content" static-label></w-textarea>
      </w-card>

      <w-card :title="configurations[2].title">
        <w-input class="mb4" label="Label" static-label></w-input>
      </w-card>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class CreateNarrativeComponent extends Vue {
  configurations = [
    {
      title: 'Name',
      content: 'Name of your Narrative'
    },
    {
      title: 'Description',
      content: 'What is your Narrative about?'
    },
    {
      title: 'Cover',
      content: 'Narrative BG Cover'
    }
  ];
}
</script>

<style scoped>
.create-narrative {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f2f4f5;
}

.narrative-configurations {
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.w-card {
  width: 30vw;
}
</style>