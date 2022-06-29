import { reactive, ref } from "vue";

const url = "https://api.github.com/repos/mezdelex/resume/commits";

export const store = reactive({
    date: ref(""),
    message: ref("")
})

export const api = {
    "getInfo": () => fetch(url).then(response => response.json()).then(data => {
        store.date = data[0].commit.author.date.substring(0, 10);
        store.message = data[0].commit.message;
    }).catch(error => console.log(error))
}