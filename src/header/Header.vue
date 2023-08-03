<template>
    <div class="header animate__animated animate__faster animate__fadeInDown">
        <div class="p-d-flex p-flex-row p-jc-end p-ai-start p-mr-3 p-pt-3">
            <Button :icon="Icons.Bars" class="p-button-outlined p-button-warning" @click="showSidebar = true" />
        </div>
        <div class="p-d-flex p-flex-column p-jc-around p-ai-center">
            <img class="selfie" :src="require('@/assets/alejandro.jpg')" />
            <h2 class="subTitle">
                <span class="decorator">|</span>
                <span class="software-developer">polyglot_software_developer</span>
                <span class="decorator">|</span>
            </h2>
            <h1 class="title">
                <span class="curly-brackets">{</span>
                Alejandro Conde Gómez
                <span class="curly-brackets">}</span>
            </h1>
            <h3 class="github" v-show="repositoriesStore.link !== ''">
                <div class="date-and-link">
                    <div>
                        Last activity:
                        <span class="custom-date">{{ repositoriesStore.date }}</span>
                    </div>
                    <div>
                        Commit:
                        <a class="custom-link" :href="repositoriesStore.link" target="_blank">Link</a>
                    </div>
                </div>
                <div class="custom-message-container">
                    Message:
                    <span class="custom-message">{{ repositoriesStore.message }}</span>
                </div>
            </h3>
            <div class="social">
                <a href="https://github.com/mezdelex" :class="`${Icons.GitHub} socialLink p-mr-2`" target="_blank" />
                <a href="https://stackoverflow.com/users/15234817/mezdelex" target="_blank">
                    <font-awesome-icon :icon="Icons.StackOverflow"
                        class="socialLink custom-social-icon custom-social-icon-stackoverflow p-mr-2" />
                </a>
                <a href="https://linkedin.com/in/mezdelex/" :class="`${Icons.LinkedIn} socialLink p-mr-2`"
                    target="_blank" />
                <a href="https://reddit.com/user/Mezdelex" :class="`${Icons.Reddit} socialLink p-mr-2`" target="_blank" />
                <a href="https://instagram.com/mezdelex" :class="`${Icons.Instagram} socialLink p-mr-2`" target="_blank" />
                <a href="https://twitch.tv/mezdelex" target="_blank">
                    <font-awesome-icon :icon="Icons.Twitch"
                        class="socialLink custom-social-icon custom-social-icon-twitch p-mr-2" />
                </a>
                <a href="https://t.me/mezdelex" :class="`${Icons.Telegram} socialLink`" target="_blank" />
            </div>
        </div>
    </div>
    <right-sidebar v-model:isVisible="showSidebar" />
</template>

<script setup lang="ts">
import RightSidebar from "@/components/RightSidebar.vue";
import { Icons } from "@/enums/enums";
import { gitHubService } from "@/services/github/gitHubService";
import { ref, Ref, onMounted } from "vue";
import { repositoriesStore } from "@/shared/repositoriesStore";

const showSidebar: Ref<boolean> = ref(false);

onMounted(async () => {
    if (repositoriesStore.link === "") {
        await gitHubService.getRepos();
        gitHubService.getUpdatedRepo();
        gitHubService.getLastCommit();
    }
});
</script>

<style>
:root {
    --primary-text: orange;
    --secondary-text: green;
    --tertiary-text: #7daea3;
    --quaternary-text: black;
    --quinary-text: #f8ca57;
}

.curly-brackets {
    color: var(--secondary-text);
}

.title {
    color: var(--primary-text);
    margin: 0;
    font-family: sans-serif;
    font-size: 1.5rem;
}

.decorator {
    color: var(--tertiary-text);
}

.software-developer {
    color: var(--secondary-text);
}

.subTitle {
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-family: sans-serif;
    font-size: 1rem;
}

.github {
    color: var(--tertiary-text);
    margin: 1rem 0 0.5rem 0;
    max-width: 20rem;
    font-family: sans-serif;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

.date-and-link {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.custom-date {
    color: var(--secondary-text);
    margin-right: 0.5rem;
}

.custom-link,
.custom-message {
    color: var(--secondary-text);
}

.custom-message-container {
    margin-top: 0.2rem;
    text-align: center;
}

.custom-social-icon {
    background-color: var(--primary-text);
    border-radius: 50%;
    color: var(--quaternary-text);
    padding: 0.3rem;
    width: 1.601rem;
}

.custom-social-icon-stackoverflow {
    height: 1.588rem;
}

.custom-social-icon-twitch {
    height: 1.388rem;
    padding-top: 0.5rem;
}

.custom-social-icon:hover {
    background-color: var(--quinary-text);
}

.socialLink {
    transition: transform 0.3s ease;
    transform: translateY(0px);
}

.socialLink:hover {
    transform: translateY(-10px);
}

.social {
    margin-top: 1rem;
}

.social>.pi {
    font-size: 2.2rem;
}

.header {
    background: var(--quaternary-text);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
}

.selfie {
    display: block;
    border-radius: 1rem;
    max-height: 200px;
    margin-left: auto;
    margin-right: auto;
}
</style>
