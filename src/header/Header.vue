<template>
  <div class="header animate__animated animate__faster animate__fadeInDown">
    <div class="p-d-flex p-flex-row p-jc-end p-ai-start p-mr-3 p-pt-3">
      <Button
        icon="pi pi-bars"
        class="p-button-outlined p-button-warning"
        @click="showSidebar = true"
      />
    </div>
    <div class="p-d-flex p-flex-column p-jc-around p-ai-center">
      <img class="selfie" :src="require('@/assets/alejandro.jpg')" />
      <h1 class="title">
        <span class="cBraces">{</span>
        Alex Conde Gómez
        <span class="cBraces">}</span>
      </h1>
      <h2 class="subTitle">
        <span class="arroba">@</span>
        <span class="fullstack">FullStackDeveloper</span>
      </h2>
      <div class="social">
        <a
          href="https://github.com/mezdelex"
          class="pi socialLink pi-github p-mr-2"
        />
        <a
          href="mailto:alexcondegomez@gmail.com"
          class="pi socialLink pi-send"
        />
      </div>
    </div>
  </div>
  <right-sidebar v-model:isVisible="showSidebar" />
</template>

<script>
import { ref, defineComponent } from "vue";
import RightSidebar from "@/components/RightSidebar.vue";

export default defineComponent({
  components: {
    RightSidebar,
  },
  setup() {
    const showSidebar = ref(false);
    return { showSidebar };
  },
});
</script>

<style>
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

.social > .pi {
  font-size: 2rem;
}

.cBraces {
  color: green;
}

.arroba {
  color: palegoldenrod;
}

.fullstack {
  color: green;
}

.title {
  color: orange;
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
