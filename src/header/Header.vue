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
        Last commit:
        <span class="date">{{ store.date }}</span>
        Message:
        <span class="message">{{ store.message }}</span>
      </h3>
      <div class="social">
        <a href="https://www.linkedin.com/in/mezdelex/" class="pi socialLink pi-briefcase p-mr-2" />
        <a href="https://github.com/mezdelex" class="pi socialLink pi-github p-mr-2" />
      </div>
    </div>
  </div>
  <right-sidebar v-model:isVisible="showSidebar" />
</template>

<script>
import { ref, defineComponent, onMounted, watch } from "vue";
import RightSidebar from "@/components/RightSidebar.vue";
import { store, api } from "@/services/github";

export default defineComponent({
  components: {
    RightSidebar,
  },
  setup() {
    const showSidebar = ref(false);

    onMounted(() => api.getUpdatedRepo());
    watch(store.repo, api.getLastCommit());

    return { showSidebar, store };
  },
});
</script>

<style>
:root {
  --primary-text: orange;
  --secondary-text: green;
  --tertiary-text: palegoldenrod;
}

.socialLink {
  transition: transform 0.3s ease;
  transform: translateY(0px);
}

.socialLink:hover {
  transform: translateY(-10px);
}

.social {
  margin: 1rem;
  margin-bottom: 0;
}

.social>.pi {
  font-size: 2rem;
}

.cBrackets {
  color: var(--secondary-text);
}

.at {
  color: var(--tertiary-text);
}

.softwareDeveloper {
  color: var(--secondary-text);
}

.date {
  color: var(--secondary-text);
  margin-right: 0.5rem;
}

.message {
  color: var(--secondary-text);
}

.title {
  color: var(--primary-text);
  margin: 0;
  margin-top: 1rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  text-shadow: 1px 1px black;
}

.subTitle {
  color: grey;
  margin: 0;
  font-family: sans-serif;
  font-size: 1rem;
  text-shadow: 1px 1px black;
}

.gitHub {
  color: var(--tertiary-text);
  margin: 1rem 0 0 0.85rem;
  font-family: sans-serif;
  font-size: 0.7rem;
  text-shadow: 1px 1px black;
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
