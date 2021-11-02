<script lang="ts" setup>
import Task from "../model/Task";
import { useStore } from "vuex";
import { reactive,computed  } from "vue";
const store = useStore();
import { ref } from "vue";

const taskName = ref("");
const addTask = (): void => {
    if (taskName.value !== "") {
        const newTask = new Task(taskName.value)
          store.dispatch("ADD_TASK",newTask).task;
        console.log("---->",store);
    }
};
const taskList = computed(() =>{
    return reactive(store.getters.GET_TASK);
})
</script>
<template>
  <div class="create_task">
    <div class="row">
      <div class="small-12 text-center">
        <h4 style="text-align:center;background:green;padding:20px">Add Tasks</h4>
      </div>
    </div>
    <div class="row align-center">
      <div class="small-12 medium-7 columns">
        <div class="card">
          <div class="card-section">
            <div class="row expanded">
              <div class="small-12 columns">
                <Legend for="todoName" style="background:green">
                  <b>Add your next task-</b>
                </Legend>
                <br>
                <input
                  id="todoName"
                  type="text"
                  v-model="taskName"
                  placeholder="Add your next task here"
                  @keyup.enter="addTask()"
                />
              </div>
            </div>
            <br>
            <div class="row expanded">
              <div class="small-12 columns text-right">
                <button
                  @click="addTask()"
                  type="button"
                  class="button success btn-lg btn-block"
                  style="background: chartreuse;"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <div>
    <table border="1 px solid" style="min-width:100%">
      <thead>
        <th>Task Name</th>
        <th>Craeted At</th>
        <th>Updated At</th>
      </thead>
      <tbody>
        <tr v-for="(row,key) in taskList" :key="key">
          <td>{{row.name}}</td>
          <td>{{row.createdAt}}</td>
          <td>{{row.updatedAt}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>

</style>