<template>
  <div class="top-navigation-menu">
    <ul>
      <li class="left"><img src="../../assets/narrative-logo-basic.png"></li>

      <router-link to="/GeneratorWebsite/Home"><li class="left menu-item">Home</li></router-link>

      <router-link to="/GeneratorWebsite/News"><li class="left menu-item">News</li></router-link>

      <router-link to="/GeneratorWebsite/Contact"><li class="left menu-item">Contact</li></router-link>

      <router-link to="/GeneratorWebsite/About"><li class="right menu-item">About</li></router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class TopNavigationMenu extends Vue {

}
</script>

<style scoped>
.top-navigation-menu {
  width: 100%;
  height: 90px;
}

.menu-item {
  margin-top: 15px;
  font-size: 20px;
  display: block;
  color: #826251;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

img {
  height: 80px;
  margin-right: 100px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffe8d1;
}

.left {
  float: left;
}

.right {
  float: right;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}
</style>