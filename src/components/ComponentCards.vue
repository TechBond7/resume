<template>
  <div class="p-grid">
    <Card class="p-mb-auto p-mt-5 p-mx-auto animate__animated animate__faster animate__fadeInUp"
      style="width: 25rem; height: 36rem" v-for="project in store.projects" :key="project.name">
      <template #header>
        <span class="last-update">
          Last update: <i class="pi pi-cloud-upload text-small"></i> {{ project.pushed_at ?
              project.pushed_at.substring(0, 10) : "Unknown"
          }}
        </span>
        <a :href="project.app" target="_">
          <img class="cardHover img-field" :src="project.image" style="height: 13rem" :alt="project.name" />
        </a>
      </template>
      <template #title>
        {{ project.name }}
      </template>
      <template #content>
        <div style="height: 12rem">
          {{ project.description }}
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