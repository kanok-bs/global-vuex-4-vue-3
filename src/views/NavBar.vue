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
    <router-link to="Slot" class="link-dark rounded">SLOT</router-link>
    <router-link to="Slot" class="link-dark rounded">$EMIT</router-link>
    <router-link to="Dictionary" class="link-dark rounded"
      >DICTIONARY APP</router-link
    >
    <a href="file:///E:/BS%20WORK/SOFTWARE/HTML%20CSS/LANDING/index.html">RESPONSIVE DESIGN LANDING</a>
    
  </div>
</template>
<style scoped>
.vertical-menu {
  min-height: 100vh;
  background-color: #eee;
}
/* .vertical-menu a:hover{
  background: red;
} */
.vertical-menu a {
  text-decoration: underline;
  font-style: italic;
  color: black;
  display: block;
  padding: 12px;
}

.vertical-menu a:hover {
  background-color: rgb(162, 226, 11);
}

.vertical-menu a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
