<script setup lang="ts">
import Spinner from "./components/Spinner.vue";
import { reactive,provide,ref } from "vue";
 const isLoading = ref(false)
 provide("loading", isLoading);
</script>

<template>
  <div v-if="isLoading" class="spinner">
    <Spinner></Spinner>
  </div>

  <router-view></router-view>
</template>

<style>

</style>
