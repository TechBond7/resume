import { reactive, ref } from "vue";

export const store = reactive({
    date: ref(""),
    message: ref(""),
    repo: ref(""),
    sha: ref("")
})

const reposUrl = "https://api.github.com/users/mezdelex/repos";
const commitsUrl = `https://api.github.com/repos/mezdelex/replaceMe/commits`;

export const api = {
    "getUpdatedRepo": () => fetch(reposUrl).then(response => response.json()).then(data => {
        store.repo = data.reduce((previous, next) => new Date(previous.updated_at).toISOString() > new Date(next.updated_at).toISOString() ? previous.name : next.name, "");
    }).catch(error => console.log(error)),
    "getLastCommit": () => {
        fetch(commitsUrl.replace("replaceMe", store.repo)).then(response => response.json()).then(data => {
            store.date = data[0].commit.author.date.substring(0, 10);
            store.message = data[0].commit.message;
            store.sha = data[0].sha;
        }).catch(error => console.log(error));
    }
}