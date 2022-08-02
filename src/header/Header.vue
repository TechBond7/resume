<template>
  <div class="header animate__animated animate__faster animate__fadeInDown">
    <div class="p-d-flex p-flex-row p-jc-end p-ai-start p-mr-3 p-pt-3">
      <Button icon="pi pi-bars" class="p-button-outlined p-button-warning" @click="showSidebar = true" />
    </div>
    <div class="p-d-flex p-flex-column p-jc-around p-ai-center">
      <img class="selfie" :src="require('@/assets/alejandro.jpg')" />
      <h1 class="title">
        <span class="cBrackets">{</span>
        Alejandro Conde Gómez
        <span class="cBrackets">}</span>
      </h1>
      <h2 class="subTitle">
        <span class="at">@</span>
        <span class="softwareDeveloper">SoftwareDeveloper</span>
      </h2>
      <h3 class="gitHub">
        <div class="dateAndLink">
          <div>
            Last activity:
            <span class="cDate">{{ store.date }}</span>
          </div>
          <div>
            Commit:
            <a class="cLink" :href="commitLink" target="_blank">Link</a>
          </div>
        </div>
        <div class="cMessageContainer">
          Message:
          <span class="cMessage">{{ store.message }}</span>
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

<script>
import { ref, defineComponent, onBeforeMount } from "vue";
import RightSidebar from "@/components/RightSidebar.vue";
import { store, api } from "@/services/github";

export default defineComponent({
  components: {
    RightSidebar,
  },
  setup() {
    const showSidebar = ref(false);
    const commitLink = ref("");

    onBeforeMount(async () => {
      await api.getUpdatedRepo();
      api.getLastCommit();
      commitLink.value = `https://github.com/mezdelex/${store.repo}/commit/${store.sha}`;
    });

    return { showSidebar, store, commitLink };
  },
});
</script>

<style>
:root {
  --primary-text: orange;
  --secondary-text: green;
  --tertiary-text: palegoldenrod;
}

.title {
  color: var(--primary-text);
  margin: 0;
  margin-top: 1rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  text-shadow: 1px 1px black;
}

.cBrackets {
  color: var(--secondary-text);
}

.subTitle {
  color: grey;
  margin: 0;
  font-family: sans-serif;
  font-size: 1rem;
  text-shadow: 1px 1px black;
}

.at {
  color: var(--tertiary-text);
}

.softwareDeveloper {
  color: var(--secondary-text);
}

.gitHub {
  color: var(--tertiary-text);
  margin: 1rem 0 0.5rem 0rem;
  font-family: sans-serif;
  font-size: 0.7rem;
  text-shadow: 1px 1px black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.dateAndLink {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.cDate {
  color: var(--secondary-text);
  margin-right: 0.5rem;
}

.cLink,
.cMessage {
  color: var(--secondary-text);
}

.cMessageContainer {
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
  background: rgba(0, 0, 0, 0.801);
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  box-shadow: 0px 1px 5px 1px black;
}

.selfie {
  display: block;
  border-radius: 1rem;
  max-height: 200px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 960px) {
  .p-sidebar-right {
    width: auto;
  }
}
</style>
