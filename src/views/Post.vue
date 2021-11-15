<script lang="ts" setup>
import { computed, reactive, onMounted, inject } from "vue";
import { useStore } from "vuex";
const loader = inject("loading");
const store = useStore();
onMounted(() => {
  loader.value = true;
  store
    .dispatch("FETCH_POST")
    .then((response) => {
      console.log("-------->response", response);
      loader.value = false;
    })
    .catch((err) => {
      console.log("-------->error", err);
    });
});
const postList = computed(() => {
  return reactive(store.getters.GET_POST);
});
console.log(postList);
</script>

<template>
  <div>
    <h1 class="center">ALL POST</h1>
  </div>
  <div v-for="(row, key) in postList" :key="key">
    <h1 class="font somecolor">
      <span>Title:</span>
      {{ row.title }}
    </h1>
    <p class="font">
      {{ row.body }}
    </p>
    <a href="" class="btncolor">VIEW DETAILS</a>
  </div>
</template>
<style scoped>
.center {
  font-family: cursive;
  text-align: center;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
.font {
  font-family: serif;
}
.somecolor {
  color: green;
}
.btncolor {
  color: blue;
  background: chartreuse;
}
</style>
