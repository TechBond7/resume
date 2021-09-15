<template>
    <div class="p-grid">
        <Card
            class="p-mb-auto p-mt-5 p-mx-auto animate__animated animate__faster animate__fadeInUp"
            style="width: 25rem"
            v-for="project in projects"
            :key="project.name"
        >
            <template #header>
                <a :href="project.app">
                    <img
                        class="cardHover"
                        :src="project.image"
                        style="height: 15rem"
                        :alt="project.name"
                    />
                </a>
            </template>
            <template #title>
                {{ project.name }}
            </template>
            <template #content>
                {{ project.description }}
            </template>
            <template #footer>
                <div class="p-d-flex p-flex-row p-jc-around p-ai-end">
                    <a :href="project.repo">
                        <Button
                            label="Repo"
                            icon="pi pi-external-link"
                            class="buttonHover p-button p-button-text"
                        />
                    </a>
                    <a :href="project.app" :alt="project.app">
                        <Button
                            label="App"
                            icon="pi pi-external-link"
                            class="buttonHover p-button p-button-text"
                        />
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
                name: "Résumé",
                image: require("@/assets/resume.jpg"),
                repo: "https://github.com/mezdelex/Resume",
                app: "https://acgresume.netlify.app/",
                description:
                    "VueJS 3 app to serve as an online portfolio to show my development experience. Used Vue 3 Composition API. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VS Code."
            },
            {
                name: "Recetario SPA",
                image: require("@/assets/recetario.jpg"),
                repo: "https://github.com/mezdelex/Recetario-SPA",
                app: "https://spa-recetario.netlify.app/",
                description:
                    "VueJS 3 app to consume a RESTful API done with Spring Boot 2.4.5 and Java JDK 11+. Used PrimeVUE as UI library, Javascript ES6, Animate CSS, 2 way syncs, props, events, mixins, slots, etc. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VS Code. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot."
            },
            {
                name: "Recetario RESTful API",
                image: require("@/assets/recetario2.jpg"),
                repo: "https://github.com/mezdelex/Recetario-RESTful-API",
                app: "https://db-recetario.herokuapp.com/api/plato/",
                description:
                    "RESTful API done with Spring Boot 2.4.5, Gradle 6.8.2 and Java JDK 11+. Used MVC, Hibernate/JPA, QueryDSL, HATEOAS, JUnit, Mockito, custom mapper, common interfaces, etc. MySQL DB is hosted by Heroku's JawsDB service. In this project I also learned how to use dockerfile, docker-compose and YAML formatting. Coded with VS Code. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot."
            },
            {
                name: "Trivia",
                image: require("@/assets/trivia.jpg"),
                repo: "https://github.com/mezdelex/Trivia",
                app: "https://mezdelex.github.io/Trivia/trivial_main.html",
                description:
                    "My first app done with Javascript, HTML and CSS consuming an external API that requires token authorization to be accessed. Coded with VS Code."
            }
        ]);
        return { projects };
    }
});
</script>
