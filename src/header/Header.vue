<template>
  <div class="header animate__animated animate__faster animate__fadeInDown">
    <div class="p-d-flex p-flex-row p-jc-end p-ai-start p-mr-3 p-pt-3">
      <Button icon="pi pi-bars" class="p-button-outlined p-button-warning" @click="showSidebar = true" />
    </div>
    <div class="p-d-flex p-flex-column p-jc-around p-ai-center">
      <img class="selfie" :src="require('@/assets/alejandro.jpg')" />
      <h2 class="subTitle">
        <span class="decorator">|</span>
        <span class="software-developer">software_developer</span>
        <span class="decorator">|</span>
      </h2>
      <h1 class="title">
        <span class="curly-brackets">{</span>
        Alejandro Conde Gómez
        <span class="curly-brackets">}</span>
      </h1>
      <h3 class="github" v-show="store.link !== ''">
        <div class="date-and-link">
          <div>
            Last activity:
            <span class="custom-date">{{ store.date }}</span>
          </div>
          <div>
            Commit:
            <a class="custom-link" :href="store.link" target="_blank">Link</a>
          </div>
        </div>
        <div class="custom-message-container">
          Message:
          <span class="custom-message">{{ store.message }}</span>
        </div>
      </h3>
      <div class="social">
        <a href="https://github.com/mezdelex" class="pi pi-github socialLink p-mr-2" />
        <a href="https://www.linkedin.com/in/mezdelex/" class="pi pi-linkedin socialLink p-mr-2" />
        <a href="https://www.reddit.com/user/Mezdelex" class="pi pi-reddit socialLink p-mr-2" />
        <a href="https://t.me/mezdelex" class="pi pi-telegram socialLink" />
      </div>
    </div>
  </div>
  <right-sidebar v-model:isVisible="showSidebar" />
</template>

<script lang="ts">
import { ref, defineComponent, Ref, onMounted } from "vue";
import RightSidebar from "@/components/RightSidebar.vue";
import { store, api } from "@/services/githubService";

export default defineComponent({
  components: {
    RightSidebar,
  },
  setup() {
    const showSidebar: Ref<boolean> = ref(false);

    onMounted(async () => {
      if (store.link === "") {
        await api.getRepos();
        api.getUpdatedRepo();
        api.getLastCommit();
      }
    });

    return { showSidebar, store };
  },
});
</script>

<style>
:root {
  --primary-text: orange;
  --secondary-text: green;
  --tertiary-text: #7daea3;
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
  background: black;
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
