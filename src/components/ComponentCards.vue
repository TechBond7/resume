<template>
    <div class="p-grid">
        <Card class="p-mb-auto p-mt-5 p-mx-auto animate__animated animate__faster animate__fadeInUp"
            v-for="project in projectsStore.projects" :key="project.name">
            <template #header>
                <span class="last-update">
                    Last update:
                    <i :class="`${Icons.Cloud} text-small`"></i>
                    {{ getLastUpdate(project) }}
                </span>
                <a :href="project.app" target="_">
                    <img class="cardHover img-field" :src="project.image" :alt="project.name" />
                </a>
            </template>
            <template #title>
                {{ project.name }}
            </template>
            <template #content>
                <div class="description-field">
                    {{ project.description }}
                </div>
            </template>
            <template #footer v-if="project.repo">
                <div class="p-d-flex p-flex-row p-jc-around p-ai-end">
                    <a :href="project.repo" target="_">
                        <div class="linkHover">
                            <i :class="Icons.GitHub"></i>
                            Repo
                        </div>
                    </a>
                    <a :href="project.app" :alt="project.app" target="_">
                        <div class="linkHover">
                            <i :class="Icons.Link"></i>
                            Link
                        </div>
                    </a>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import IProject from "@/models/IProject";
import { Icons } from "@/enums/enums";
import { projectsService } from "@/services/projects/projectsService";
import { projectsStore } from "@/shared/projectsStore";
import { watchEffect } from "vue";

const getLastUpdate = (project: IProject) => project.pushed_at ? project.pushed_at.substring(0, 10) : "Unknown"

watchEffect(() => projectsService.sortProjects());
</script>
