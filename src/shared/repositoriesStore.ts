import IRepository from "@/models/IRepository";
import { reactive, ref } from "vue";

export const repositoriesStore = reactive({
    repos: reactive<Array<IRepository>>([]),
    date: ref(""),
    message: ref(""),
    repo: ref(""),
    sha: ref(""),
    link: ref(""),
});
