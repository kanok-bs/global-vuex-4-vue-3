<template>
  <div>
    <slot :menu="menu" name="title"> </slot>
    <slot name="content"> </slot>
    <slot name="comments"> </slot>
    <button v-on:click="emit('accepted')"> CLICK ME</button>
  </div>
</template>
<script setup lang="ts">
import { Menu } from "../model/Menu";
import { reactive, defineEmits } from "vue";

const menu = reactive<Menu[]>([
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
] as Menu[]);
  // emits: ['accepted']
  
        const emit = defineEmits(['accepted']);



</script>
