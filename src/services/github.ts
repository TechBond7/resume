import { reactive, ref } from "vue";

interface storeType {
    date: string,
    message: string,
    repo: string,
    sha: string
}

export const store: storeType = reactive({
    date: ref(""),
    message: ref(""),
    repo: ref(""),
    sha: ref("")
})

const reposUrl: string = "https://api.github.com/users/mezdelex/repos";
const commitsUrl: string = `https://api.github.com/repos/mezdelex/replaceMe/commits`;

interface apiType {
    getUpdatedRepo: () => Promise<void>,
    getLastCommit: () => void
}

export const api: apiType = {
    getUpdatedRepo: () => fetch(reposUrl).then(response => response.json()).then(data => {
        store.repo = data.reduce((current: { pushed_at: number; }, next: { pushed_at: number; }) => current.pushed_at > next.pushed_at ? current : next, data[0]).name;
    }).catch(error => console.log(error)),
    getLastCommit: () => {
        fetch(commitsUrl.replace("replaceMe", store.repo)).then(response => response.json()).then(data => {
            store.date = data[0].commit.author.date.substring(0, 10);
            store.message = data[0].commit.message;
            store.sha = data[0].sha;
        }).catch(error => console.log(error));
    }
}