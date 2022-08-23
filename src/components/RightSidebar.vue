<template>
  <Sidebar class="sidebar-bg" :visible="isVisible"
    @update:visible="(value: boolean) => $emit('update:isVisible', value)" :baseZIndex="1" position="right">
    <ul>
      <li class="router-link">
        <router-link :to="'/'">
          <i class="pi pi-calendar custom-icon"></i>Timeline
        </router-link>
      </li>
      <li class="router-link">
        <router-link :to="'/projects'">
          <i class="pi pi-folder custom-icon"></i>Projects
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
:root {
  --custom-black: black;
}

.custom-icon {
  margin-right: 0.5rem;
}

.router-link {
  margin: 1rem;
}

.sidebar-bg {
  background-color: var(--custom-black);
}

.p-button.p-button-icon-only {
  border-radius: 0.5rem;
}
</style>
