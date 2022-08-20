<template>
  <div class="p-grid">
    <Card class="p-mb-auto p-mt-5 p-mx-auto animate__animated animate__faster animate__fadeInUp"
      style="width: 25rem; height: 36rem" v-for="project in store.projects" :key="project.name">
      <template #header>
        <a :href="project.app" target="_">
          <img class="cardHover" :src="project.image" style="height: 15rem" :alt="project.name" />
        </a>
      </template>
      <template #title>
        {{ project.name }}
      </template>
      <template #content>
        <div style="height: 12rem">
          {{ project.description }} {{ project.pushed_at }}
        </div>
      </template>
      <template #footer v-if="project.repo">
        <div class="p-d-flex p-flex-row p-jc-around p-ai-end">
          <a :href="project.repo" target="_">
            <Button label="Repo" icon="pi pi-github" class="buttonHover p-button p-button-text" />
          </a>
          <a :href="project.app" :alt="project.app" target="_">
            <Button label="Link" icon="pi pi-link" class="buttonHover p-button p-button-text" />
          </a>
        </div>
      </template>
    </Card>
  </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { api, store } from "@/services/projectsService"

export default defineComponent({
  setup() {
    watchEffect(() => api.sortProjects());

    return { store };
  },
});
</script>
<style >
.p-card-body {
  margin: 0.5rem;
  padding: 0.5rem;
}
</style>