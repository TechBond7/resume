import IProject from "@/models/IProject";
import { reactive } from "vue";

export const projectsStore = reactive({
  projects: reactive<Array<IProject>>([]),
});
