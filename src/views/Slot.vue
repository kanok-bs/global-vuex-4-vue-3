<template>
  <div>
    <ChildSlot @accepted="accepted">
      <template v-slot:title="slotProps">
        {{ slotProps.menu }} Our Title Parent here
      </template>
      <template v-slot:content> Our Content </template>
      <template v-slot:comments> Our Comments </template>
    </ChildSlot>
  </div>
</template>
<script lang="ts" setup>
import ChildSlot from "../components/ChildSlot.vue";
  

const accepted = () =>{
  console.log("-----------> hi i am here")
}
</script>
