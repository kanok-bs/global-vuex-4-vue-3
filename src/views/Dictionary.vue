<template>
  <div>
    <input
      @change="fetchDictionaryData"
      class="pd"
      type="text"
      placeholder="search for word"
      v-model="searchVal"
    />
  </div>
<br>
  <div class="body" v-for="(rowData, key) in dictionaryWord" :key="key">
    <strong>Word : {{rowData.word}}</strong><br>
    <strong>Origin : {{rowData.origin}}</strong>
    <br>
    <div v-for="(rowMenaing, mkey) in rowData.meanings" :key="mkey" class="">
      <strong> partOfSpeech : {{ rowMenaing.partOfSpeech }}</strong>
      <div v-for="(rowMain, mainkey) in rowMenaing.definitions" :key="mainkey">
        <strong v-if="mainkey == 0">Defination</strong> <br />
        **{{ rowMain.definition }}
         <div v-for="(rowSynonyms, skey) in rowMain.synonyms" :key="skey">
        <strong v-if="skey == 0">Synonyms</strong>
        {{ rowSynonyms }},
      </div>
      </div>
     
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref, reactive, computed } from "vue";

const store = useStore();
const searchVal = ref("" as string);
console.log(store.getters.GET_DICTIONARY);
const dictionaryWord = computed(() => {
  return reactive(store.getters.GET_DICTIONARY);
});
const fetchDictionaryData = (event: any) => {
  store.dispatch("FETCH_DICTIONARY", searchVal.value).dictionary;
};
</script>
<style scoped>
.body{
  overflow-y: scroll;
  max-height: 100vh;
}
.pd {
  padding: 10px;
}
</style>
