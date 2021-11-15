<script setup lang="ts">
import { useStore } from "vuex";
import { reactive, computed, inject } from "vue";
import useLoading from "vue-loading-overlay";
const loader = inject("loading");

const store = useStore();

console.log("------>", useLoading);
// const loading = useLoading();
// loading.show()
console.log(store.getters.GET_UNIVARSITIES);
const univarsitiesList = computed(() => {
  return reactive(store.getters.GET_UNIVARSITIES);
});

const fetchUnivarsity = (event: any) => {
  loader.value = true;
  const value = event.target.value;
  store
    .dispatch("FETCH_UNIVARSITIES", value)
    .then((response) => {
      console.log("-------->response", response);
      loader.value = false;
    })
    .catch((err) => {
      console.log("-------->error", err);
    });
};
</script>

<template>
  <div>
    <label class="inline">
      Country Name</label
    >
    <input class="inline" placeholder="put your country name here" type="text" @change="fetchUnivarsity($event)" />
  </div>
  <br />
  <table id="univarsities">
    <thead>
      <tr>
        <th style="text-align: center">Country Name</th>
        <th style="text-align: center">Univarsity Name</th>
        <th style="text-align: center">Domain Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, key) in univarsitiesList" :key="key">
        <td>{{ row.country }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.domains[0] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
label{
  color: blue;
}
#center {
  margin-left: 40%;
  background-color: rgb(213, 213, 216);
  width: 170px;
  height: 60px;
}
.inline{
  margin: 10px;
  display: inline;
}
#univarsities {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-style: italic;
}

#univarsities td,
#univarsities th {
  border: 1px solid #ddd;
  padding: 8px;
}

#univarsities tr:nth-child(even) {
  background-color: #f2f2f2;
}

#univarsities tr:hover {
  background-color: #ddd;
}

#univarsities th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: blue;
  color: white;
}
</style>
