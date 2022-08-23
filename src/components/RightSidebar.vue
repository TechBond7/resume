<template>
  <Sidebar class="sidebar-bg" :visible="isVisible"
    @update:visible="(value: boolean) => $emit('update:isVisible', value)" :baseZIndex="1" position="right">
    <ul>
      <li class="router-link">
        <router-link :to="'/'">
          Timeline
        </router-link>
      </li>
      <li class="router-link">
        <router-link :to="'/projects'">
          Projects
        </router-link>
      </li>
    </ul>
  </Sidebar>
</template>

<script lang="ts">
export default {
  props: {
    isVisible: Boolean,
  },
};
</script>

<style>
.router-link {
  margin: 1rem;
}

.sidebar-bg {
  width: 12.75rem;
  background-color: black;
}

.p-button.p-button-icon-only {
  border-radius: 0.5rem;
}
</style>
