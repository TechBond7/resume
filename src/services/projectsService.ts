import { reactive, ref } from "vue";
import { store as githubStore } from "@/services/githubService"

interface projectType {
    id: string,
    pushed_at: string,
    name: string,
    image: string,
    repo: string,
    app: string,
    description: string
}

const projects: Array<projectType> = [
    {
        id: "AoC2022",
        pushed_at: "2022-12-03T07:40:47Z",
        name: "Advent of Code (2022)",
        image: require("@/assets/aoc2022.png"),
        repo: "https://github.com/mezdelex/AoC2022",
        app: "https://adventofcode.com/2022",
        description:
            "Algorithmic problem solving to achieve further C# 11 language proficiency in declarative paradigm using LINQ, lambdas and expression bodied members. Coded with VS Code.",
    },
    {
        id: "",
        pushed_at: "2022-05-19T07:40:47Z",
        name: "Touch Typing",
        image: require("@/assets/monkeytype.png"),
        repo: "https://github.com/monkeytypegame/monkeytype",
        app: "https://monkeytype.com/",
        description:
            "A journey started in May 2022 to improve my touch typing skills and eventually increase my productivity. My current best mark is at 106 WPM with 100% accuracy @ monkeytype default values.",
    },
    {
        id: "Calculator",
        pushed_at: "",
        name: "Calculator",
        image: require("@/assets/calculator.png"),
        repo: "https://github.com/mezdelex/Calculator",
        app: "https://calculator-mezdelex.netlify.app",
        description:
            "A small project done with React 18 using hooks, functional components, context, context provider, props destructuring, children reserved word and kind of higher order component-ish approach to be able to reuse hook logic. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VS Code.",
    },
    {
        id: "LeetCode",
        pushed_at: "",
        name: "LeetCode",
        image: require("@/assets/leetcode.png"),
        repo: "https://github.com/mezdelex/LeetCode",
        app: "https://leetcode.com/mezdelex",
        description:
            "LeetCode exercises to keep algorithmic problem solving fresh and improve my expertise with C++, C# and Rust using cassert, .NET's xUnit and Rustlang's built in library for unit testing. Also added CI pipelines for each language via GitHub Actions to run testing jobs server side. Coded with VS Code.",
    },
    {
        id: "Resume",
        pushed_at: "",
        name: "Resume",
        image: require("@/assets/resume.png"),
        repo: "https://github.com/mezdelex/Resume",
        app: "https://www.mezdelex.com",
        description:
            "Vue 3 app to serve as an online portfolio to show my development experience. Used Vue 3 Composition API with Typescript. The deployment has been done using GitHub's CD pipeline against Netlify and hosted in a dedicated domain. Coded with VS Code.",
    },
    {
        id: "Concesionario-SPA",
        pushed_at: "",
        name: "Concesionario",
        image: require("@/assets/concesionario.jpg"),
        repo: "https://github.com/mezdelex/Concesionario-SPA",
        app: "https://www.youtube.com/watch?v=iDaF9cqdtz0&ab_channel=Mezdelex",
        description:
            "Technical test using Spring Boot 2.4.5, Vue 3 Composition API with PrimeVUE as UI library and IBM's FileNet service as automated document manager. Coded with VS Code. The project was not deployed anywhere so the link it's a YouTube demo.",
    },
    {
        id: "Recetario-SPA",
        pushed_at: "",
        name: "Recetario SPA",
        image: require("@/assets/recetario.jpg"),
        repo: "https://github.com/mezdelex/Recetario-SPA",
        app: "https://spa-recetario.netlify.app",
        description:
            "Vue 3 app to consume a RESTful API done with Spring Boot 2.4.5 and Java JDK 11+. Used PrimeVUE as UI library, Javascript ES6, Animate CSS, 2 way syncs, props, events, mixins, slots, etc. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VS Code. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot.",
    },
    {
        id: "Recetario-RESTful-API",
        pushed_at: "",
        name: "Recetario RESTful API",
        image: require("@/assets/recetario2.jpg"),
        repo: "https://github.com/mezdelex/Recetario-RESTful-API",
        app: "https://db-recetario.herokuapp.com/api/plato",
        description:
            "RESTful API done with Spring Boot 2.4.5, Gradle 6.8.2 and Java JDK 11+. Used MVC, Hibernate/JPA, QueryDSL, HATEOAS, JUnit, Mockito, custom mapper, common interfaces, dockerfile, docker-compose, YAML formatting, etc. MySQL DB is hosted by Heroku's JawsDB service. Coded with VS Code. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot.",
    },
    {
        id: "AoC2020",
        pushed_at: "",
        name: "Advent of Code (2020)",
        image: require("@/assets/aoc2020.png"),
        repo: "https://github.com/mezdelex/AoC2020",
        app: "https://adventofcode.com/2020",
        description:
            "Algorithmic problem solving to achieve further Java's JDK 11+ language proficiency in declarative paradigm using streams, lambdas and functional interfaces. Coded with VS Code.",
    },
    {
        id: "HackerRank",
        pushed_at: "",
        name: "HackerRank",
        image: require("@/assets/hackerrank.png"),
        repo: "https://github.com/mezdelex/HackerRank",
        app: "https://www.hackerrank.com/alexcondegomez",
        description:
            "Algorithmic problem solving to achieve Java's JDK 11+ language proficiency in both imperative and declarative paradigms. Coded with VS Code.",
    },
    {
        id: "Trivia",
        pushed_at: "",
        name: "Trivia",
        image: require("@/assets/trivia.jpg"),
        repo: "https://github.com/mezdelex/Trivia",
        app: "https://mezdelex.github.io/Trivia/trivial_main.html",
        description:
            "My first Web App back in 2020 done with Javascript, HTML, CSS and Bootstrap consuming an external Trivia API that required token authorization to be accessed. Coded with VS Code.",
    }
];

interface storeType {
    projects: Array<projectType>,
}

export const store: storeType = reactive({
    projects: ref([])
});

interface apiType {
    sortProjects: () => void
}

export const api: apiType = {
    sortProjects: () => {
        if (githubStore.repos.length)
            store.projects = projects.map(project => {
                if (project.id !== "")
                    project.pushed_at = githubStore.repos.filter(repo => repo.name === project.id)[0]?.pushed_at;

                return project;
            }).sort((previous, next) => new Date(next.pushed_at).getTime() - new Date(previous.pushed_at).getTime());
        else
            store.projects = projects;
    }
}