<template>
  <Timeline :value="data" align="alternate">
    <template #marker="slotProps">
      <div class="animate__animated animate__faster animate__fadeInUp">
        <span
          class="custom-marker p-shadow-5"
          :style="{ backgroundColor: slotProps.item.color }"
        >
          <i :class="slotProps.item.icon"></i>
        </span>
      </div>
    </template>
    <template #content="slotProps">
      <div :class="conditionalFade()">
        <Fieldset class="fieldsetHover" :legend="slotProps.item.what">
          <ul>
            <li>
              {{ slotProps.item.date }}
            </li>
            <li class="linkHover" v-if="hasUrl(slotProps.item.where)">
              <a
                :href="slotProps.item.where"
                :alt="slotProps.item.where"
                target="_"
              >
                {{ slotProps.item.where }}
              </a>
            </li>
            <li v-else>
              {{ slotProps.item.where }}
            </li>
            <li>
              {{ slotProps.item.activity }}
            </li>
          </ul>
          <Accordion>
            <AccordionTab header="Skills">
              <p class="accordionText">
                {{ slotProps.item.skills }}
              </p>
            </AccordionTab>
          </Accordion>
        </Fieldset>
      </div>
    </template>
  </Timeline>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    let counter = 0;
    const color = ref("#333");
    const data = ref([
      {
        what: "Self Taught",
        where: "https://www.mezdelex.com/",
        date: "2021-Present",
        icon: "pi pi-desktop",
        color: color.value,
        skills:
          "Algorithms, Data Structures, Problem Solving, Java JDK 11+, Spring Boot 2+, C# 10, .NET 6, MVC, Hibernate, QueryDSL, HATEOAS, JUnit, xUnit, Mockito, Gradle, Maven, RESTful API, Javascript ES6, PHP8+, Laragon, VueJS 3 (Options API/Composition API), PrimeVUE, Animate CSS, Router, Vuex, Store, YAML, OAuth2, OpenID, JWT, Okta, Docker, Heroku, Netlify, CD, MySQL, MySQL Workbench, VS Code, Insomnia, Git, GitHub, Powershell Core, Windows Terminal...",
        activity: "Full Stack Development",
      },
      {
        what: "D&A Innovative Systems",
        where: "https://www.innovative-systems.es/",
        date: "2021-Present",
        icon: "pi pi-desktop",
        color: color.value,
        skills:
          "Python, C++, HTML, CSS, Javascript, Electron, jQuery, Vue, PHP, Scripting, SQL, DBeaver, RabbitMQ, Git, GitHub, Windows Terminal, Powershell Core, VS Code, GNU/Linux, Bash, VirtualBox, Hercules, MVC, Domain Model, Markdown, Holded, Bug Fixing, Time & Task Management...",
        activity: "Full Stack Development",
      },
      {
        what: "Advanced Java Development & RDBMS",
        where: "https://www.ipartek.com/",
        date: "2020-2021",
        icon: "pi pi-desktop",
        color: color.value,
        skills:
          "Java JDK 8+, Javascript ES6, Tomcat, MySQL, MySQL Workbench, Eclipse, VS Code, Insomnia, JSP, Servlets, Git, MVC, JSON...",
        activity: "Full Stack Development",
      },
      {
        what: "BBK Bootcamp Full Stack .NET Core",
        where: "https://bbkbootcamp.com/",
        date: "2019-2020",
        icon: "pi pi-desktop",
        color: color.value,
        skills:
          "C# .NET Core, Entity Framework, Javascript, HTML5, CSS3, jQuery, Bootstrap, Git, VS Code, VS, MS SQL Server, MSSM, Rest API, JWT, MVC, Insomnia/Postman, JSON...",
        activity: "Full Stack Development",
      },
      {
        what: "IT Technician",
        where: "Galitek S.L.",
        date: "2018-2019",
        icon: "pi pi-globe",
        color: color.value,
        skills:
          "FTTH/CATV, Service Migrations, VoIP, Help Desk, Networking Solutions...",
        activity: "Telecommunications",
      },
      {
        what: "Freelancer / IT Technician",
        where: "Fibrabide S.L.",
        date: "2015-2018",
        icon: "pi pi-globe",
        color: color.value,
        skills:
          "FTTH/MacroLAN, Service Migrations, Help Desk, Networking Solutions...",
        activity: "Telecommunications",
      },
      {
        what: "Freelancer / Graphic Designer / Photographer",
        where: "Demez Photo",
        date: "2014-2016",
        icon: "pi pi-camera",
        color: color.value,
        skills:
          "Photoshop, Illustrator, Lightroom, Logo Design, Marketing, Photo Manipulation, Branding, Album Design, Model Shooting, Weeding Management, Simple WEBs...",
        activity: "Photography & grahic design",
      },
      {
        what: "Graphic Designer / Photographer",
        where: "https://www.prixmadigital.com/",
        date: "2010-2014",
        icon: "pi pi-camera",
        color: color.value,
        skills:
          "Photoshop, Illustrator, Lightroom, Branding, Stock Photography, Album Design, Model Shooting, Weeding Management, Simple Joomla Web Designs...",
        activity: "Photography & grahic design",
      },
      {
        what: "IT Technician",
        where: "https://fpandramari.eus/",
        date: "2005-2007",
        icon: "pi pi-briefcase",
        color: color.value,
        skills:
          "VoIP, Server Management, C, Structured Programming, Network Design, RF Applications...",
        activity: "HNC",
      },
    ]);
    const hasUrl = (value) => value.includes("https");
    const conditionalFade = () => {
      return counter++ % 2 !== 0
        ? "animate__animated animate__faster animate__fadeInLeft"
        : "animate__animated animate__faster animate__fadeInRight";
    };
    return { data, hasUrl, conditionalFade };
  },
});
</script>
