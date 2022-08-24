<template>
  <Sidebar class="sidebar-bg" :visible="isVisible"
    @update:visible="(value: boolean) => $emit('update:isVisible', value)" :baseZIndex="1" position="right">
    <ul class="custom-link-wrapper">
      <li class="custom-list-item">
        <router-link :to="'/'">
          <font-awesome-icon icon="fa-solid fa-timeline" class="custom-rotate-90 custom-timeline"></font-awesome-icon>
          Timeline
        </router-link>
      </li>
      <li>
        <router-link :to="'/projects'">
          <font-awesome-icon icon="fa-solid fa-file-code" class="custom-projects custom-projects"></font-awesome-icon>
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
:root {
  --custom-black: black;
}

.custom-link-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.custom-list-item {
  margin-bottom: 1rem;
}

.custom-rotate-90 {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}

.custom-timeline {
  margin-inline: 0.2rem;
}

.custom-projects {
  margin-inline: 0.46rem;
}

.sidebar-bg {
  background-color: var(--custom-black);
}

.p-button.p-button-icon-only {
  border-radius: 0.5rem;
}
</style>
