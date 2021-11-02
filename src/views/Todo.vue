<template>
  <div>
    <router-view />
    <div class="bottom_bar">
      <div class="row expanded">
        <div class="sm-4 columns text-center">
          <router-link to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </router-link>
        </div>
        <div class="sm-4 columns text-center">
          <router-link to="/add-task">
            <i class="fa fa-plus" aria-hidden="true" />
            <span>Add Tasks</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.columns{
    margin-left: 20PX;
    float:left;
}
</style>
