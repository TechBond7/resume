<template>
  <div class="p-grid">
    <Card class="
        p-mb-auto p-mt-5 p-mx-auto
        animate__animated animate__faster animate__fadeInUp
      " style="width: 25rem; height: 36rem" v-for="project in projects" :key="project.name">
      <template #header>
        <a :href="project.app" target="_">
          <img class="cardHover" :src="project.image" style="height: 15rem" :alt="project.name" />
        </a>
      </template>
      <template #title>
        {{ project.name }}
      </template>
      <template #content>
        <div style="height: 12rem">
          {{ project.description }}
        </div>
      </template>
      <template #footer v-if="project.repo">
        <div class="p-d-flex p-flex-row p-jc-around p-ai-end">
          <a :href="project.repo" target="_">
            <Button label="Repo" icon="pi pi-github" class="buttonHover p-button p-button-text" />
          </a>
          <a :href="project.app" :alt="project.app" target="_">
            <Button label="Link" icon="pi pi-link" class="buttonHover p-button p-button-text" />
          </a>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const projects = ref([
      {
        name: "Touch Typing",
        image: require("@/assets/monkeytype.png"),
        repo: "https://github.com/monkeytypegame/monkeytype",
        app: "https://monkeytype.com/",
        description:
          "A journey started in May 2022 to improve my touch typing skills and eventually increase my productivity. My current best mark is at 106 WPM with 100% accuracy @ monkeytype default values.",
      },
      {
        name: "Calculator",
        image: require("@/assets/calculator.png"),
        repo: "https://github.com/mezdelex/Calculator",
        app: "https://calculator-mezdelex.netlify.app",
        description:
          "A small project done with React 18 using hooks, functional components, context, context provider, props destructuring, children reserved word and kind of higher order component-ish approach to be able to reuse hook logic. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VS Code.",
      },
      {
        name: "LeetCode",
        image: require("@/assets/leetcode.png"),
        repo: "https://github.com/mezdelex/LeetCode",
        app: "https://leetcode.com/mezdelex",
        description:
          "A journey started in April 2022 to keep algorithmic problem solving fresh and improve my expertise with C++ and C# while using .NET xUnit for Unit Testing. Coded with VS Code.",
      },
      {
        name: "Resume",
        image: require("@/assets/resume.jpg"),
        repo: "https://github.com/mezdelex/Resume",
        app: "https://www.mezdelex.com",
        description:
          "VueJS 3 app to serve as an online portfolio to show my development experience. Used Vue 3 Composition API. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VS Code.",
      },
      {
        name: "Concesionario",
        image: require("@/assets/concesionario.jpg"),
        repo: "https://github.com/mezdelex/Concesionario-SPA",
        app: "https://www.youtube.com/watch?v=iDaF9cqdtz0&ab_channel=Mezdelex",
        description:
          "Technical test using Spring Boot 2.4.5, VueJS 3 Composition API with PrimeVUE as UI library and IBM's FileNet service as automated document manager. Coded with VS Code. The project was not deployed anywhere so the link it's a YouTube demo.",
      },
      {
        name: "Recetario SPA",
        image: require("@/assets/recetario.jpg"),
        repo: "https://github.com/mezdelex/Recetario-SPA",
        app: "https://spa-recetario.netlify.app",
        description:
          "VueJS 3 app to consume a RESTful API done with Spring Boot 2.4.5 and Java JDK 11+. Used PrimeVUE as UI library, Javascript ES6, Animate CSS, 2 way syncs, props, events, mixins, slots, etc. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VS Code. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot.",
      },
      {
        name: "Recetario RESTful API",
        image: require("@/assets/recetario2.jpg"),
        repo: "https://github.com/mezdelex/Recetario-RESTful-API",
        app: "https://db-recetario.herokuapp.com/api/plato",
        description:
          "RESTful API done with Spring Boot 2.4.5, Gradle 6.8.2 and Java JDK 11+. Used MVC, Hibernate/JPA, QueryDSL, HATEOAS, JUnit, Mockito, custom mapper, common interfaces, dockerfile, docker-compose, YAML formatting, etc. MySQL DB is hosted by Heroku's JawsDB service. Coded with VS Code. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot.",
      },
      {
        name: "Advent of Code (2020)",
        image: require("@/assets/advent_of_code.png"),
        repo: "https://github.com/mezdelex/AoC2020",
        app: "https://adventofcode.com/2020",
        description:
          "Algorithmic problem solving to achieve further Java's JDK 11+ language proficiency in declarative paradigm using streams, lambdas and functional interfaces. Used VS Code as IDE.",
      },
      {
        name: "HackerRank",
        image: require("@/assets/hackerrank.png"),
        repo: "https://github.com/mezdelex/HackerRank",
        app: "https://www.hackerrank.com/alexcondegomez",
        description:
          "Algorithmic problem solving to achieve Java's JDK 11+ language proficiency in both imperative and declarative paradigms. Used VS Code as IDE.",
      },
      {
        name: "Trivia",
        image: require("@/assets/trivia.jpg"),
        repo: "https://github.com/mezdelex/Trivia",
        app: "https://mezdelex.github.io/Trivia/trivial_main.html",
        description:
          "My first Web App back in 2020 done with Javascript, HTML, CSS and Bootstrap consuming an external Trivia API that required token authorization to be accessed. Coded with VS Code.",
      },
    ]);

    return { projects };
  },
});
</script>
