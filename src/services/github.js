import { reactive, ref } from "vue";

export const store = reactive({
    date: ref(""),
    message: ref(""),
    repo: ref("")
})

const reposUrl = "https://api.github.com/users/mezdelex/repos";
const commitsUrl = `https://api.github.com/repos/mezdelex/${store.repo}/commits`;

export const api = {
    "getUpdatedRepo": () => fetch(reposUrl).then(response => response.json()).then(data => {
        store.repo = data.reduce((previous, next) => parseInt(previous.updated_at.substring(0, 10)) > parseInt(next.updated_at.substring(0, 10)) ? previous.name : next.name, "");
    }).catch(_ => store.repo = "resume"),
    "getLastCommit": () => fetch(commitsUrl).then(response => response.json()).then(data => {
        store.date = data[0].commit.author.date.substring(0, 10);
        store.message = data[0].commit.message;
    }).catch(_ => {
        store.date = "N/A";
        store.message = "GitHub's API max requests exceeded";
    })
}