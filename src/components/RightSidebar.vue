<template>
  <Sidebar class="sidebarBG" :visible="isVisible" @update:visible="(value: boolean) => $emit('update:isVisible', value)"
    :baseZIndex="1000" position="right">
    <ul>
      <li>
        <router-link :to="'/'">
          <Button class="p-button-text p-button-warning"> Timeline </Button>
        </router-link>
      </li>
      <li>
        <router-link :to="'/projects'">
          <Button class="p-button-text p-button-warning"> Projects </Button>
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
.sidebarBG {
  background-color: black;
}

.p-button.p-button-icon-only {
  border-radius: 0.5rem;
}
</style>
