<script lang="ts" setup>
import NavBar from "../views/NavBar.vue";
</script>

<template>
  <div style="min-width: 20%;max-width: 20%;float:left">
    <NavBar></NavBar>
  </div>
  <div style="min-width:80%;max-width:80%;;float:right;font-style:italic">
    <router-view></router-view>
  </div>
</template>
