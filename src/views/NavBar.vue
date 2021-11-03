<script lang="ts" setup></script>

<template>
  <div class="vertical-menu">
    <router-link to="Home" class="link-dark rounded">HOME</router-link>
    <router-link to="Univarsities" class="link-dark rounded"
      >UNIVARSITY API</router-link
    >
    <router-link to="Todo" class="link-dark rounded">TODO</router-link>
    <router-link to="Post" class="link-dark rounded"
      >JSON PLACEHOLDER API</router-link
    >
    <router-link to="Slot" class="link-dark rounded"
      >SLOT</router-link
    >
    <router-link to="Slot" class="link-dark rounded"
      >$EMIT</router-link
    >
    <router-link to="Dictionary" class="link-dark rounded"
      >DICTIONARY APP</router-link
    >
  </div>
</template>
<style scoped>
.vertical-menu {
  height: 1000px;
  width: 240px;
  min-height: 100vh;
  /* background: brown; */
  background-color: #eee;
}

.vertical-menu a {
    text-decoration: underline;
  font-style: italic;
  /* font-weight:bold; */
  /* background-color: #eee; */
  color: black;
  display: block;
  padding: 12px;
  /* text-decoration: none; */
}

.vertical-menu a:hover {
  background-color: #ccc;
}

.vertical-menu a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
