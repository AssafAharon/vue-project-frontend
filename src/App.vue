<template>
  <w-app>
    <div class="first-container">
      <div class="second-container">
        <router-view></router-view>
      </div>
    </div>
  </w-app>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.first-container {
  display: flex;
  justify-content: center;
}

.second-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
