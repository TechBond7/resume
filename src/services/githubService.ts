import { reactive, ref } from "vue";

interface repoType {
    name: string,
    pushed_at: string
}

interface storeType {
    repos: Array<repoType>,
    repo: string,
    date: string,
    message: string,
    sha: string,
    link: string
}

export const store: storeType = reactive({
    repos: ref([]),
    date: ref(""),
    message: ref(""),
    repo: ref(""),
    sha: ref(""),
    link: ref("")
})

const reposUrl: string = "https://api.github.com/users/mezdelex/repos";
const commitsUrl: string = `https://api.github.com/repos/mezdelex/replaceMe/commits`;

interface apiType {
    getRepos: () => Promise<void>,
    getUpdatedRepo: () => void,
    getLastCommit: () => void
}

export const api: apiType = {
    getRepos: () => fetch(reposUrl).then(response => response.json()).then(data => store.repos = data).catch(error => console.log(error)),
    getUpdatedRepo: () => {
        if (store.repos.length)
            store.repo = store.repos.reduce((current, next) => new Date(current.pushed_at) > new Date(next.pushed_at) ? current : next, store.repos[0]).name;
    },
    getLastCommit: () => {
        if (store.repos.length)
            fetch(commitsUrl.replace("replaceMe", store.repo)).then(response => response.json()).then(data => {
                store.date = data[0].commit.author.date.substring(0, 10);
                store.message = data[0].commit.message;
                store.sha = data[0].sha;
                store.link = `https://github.com/mezdelex/${store.repo}/commit/${store.sha}`
            }).catch(error => console.log(error));
    }
}