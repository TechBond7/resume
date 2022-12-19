import { repositoriesStore } from "@/shared/repositoriesStore"
import { projectsStore } from "@/shared/projectsStore"
import { projectsData } from "@/data/projectsData"
import IProjectsService from "./IProjectsService";

export const projectsService: IProjectsService = {
    sortProjects: () => {
        if (repositoriesStore.repos.length)
            projectsStore.projects = projectsData.map(project => {
                if (project.id !== "")
                    project.pushed_at = repositoriesStore.repos.filter(repo => repo.name === project.id)[0]?.pushed_at;

                return project;
            }).sort((previous, next) => new Date(next.pushed_at).getTime() - new Date(previous.pushed_at).getTime());
        else
            projectsStore.projects = projectsData;
    }
}
