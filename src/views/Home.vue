<script lang="ts" setup>
import NavBar from "../views/NavBar.vue";
</script>

<template>
<div class="display">
  <div class="navbar">
    <NavBar></NavBar>
  </div>
  <div class="main-hero">
    <router-view></router-view>
  </div>
  </div>
</template>
<style scoped>
.main-hero{
  box-sizing: border-box;
  padding: 10px;
  min-width: 85vw;
}
.navbar{
  min-width: 15vw;
}
.display{
  overflow-wrap: break-word;
  display: flex;
  justify-content: center;
}
</style>
