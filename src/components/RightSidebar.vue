<template>
  <Sidebar class="sidebar-bg" :visible="isVisible"
    @update:visible="(value: boolean) => $emit('update:isVisible', value)" :baseZIndex="1" position="right">
    <ul class="custom-link-wrapper">
      <li class="custom-list-item">
        <router-link :to="'/'">
          <font-awesome-icon icon="fa-solid fa-calendar-days" class="custom-timeline">
          </font-awesome-icon>
          Timeline
        </router-link>
      </li>
      <li class="custom-list-item">
        <router-link :to="'/projects'">
          <font-awesome-icon icon="fa-solid fa-folder" class="custom-projects">
          </font-awesome-icon>
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
  margin: 0.75rem 2rem 0.75rem 2rem;
}

.custom-timeline {
  font-size: larger;
  margin-inline: 0.25rem;
}

.custom-projects {
  font-size: larger;
  margin-inline: 0.2rem;
}

.sidebar-bg {
  background-color: var(--custom-black);
}

.p-button.p-button-icon-only {
  border-radius: 0.5rem;
}

@media screen and (max-width: 960px) {
  .p-sidebar-right {
    width: auto;
  }
}
</style>
