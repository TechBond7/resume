<template>
  <Timeline :value="data" align="alternate">
    <template #marker="slotProps">
      <div class="animate__animated animate__faster animate__fadeInUp">
        <span class="custom-marker p-shadow-5">
          <i :class="slotProps.item.icon"></i>
        </span>
      </div>
    </template>
    <template #content="slotProps">
      <div :class="conditionalFade()">
        <Fieldset class="fieldsetHover" :legend="slotProps.item.what">
          <ul>
            <li class="custom-info">
              {{ slotProps.item.date }} <i class="pi pi-box text-small"></i> {{ slotProps.item.activity }}
            </li>
            <li class="linkHover" v-if="hasUrl(slotProps.item.where)">
              <a :href="slotProps.item.where" :alt="slotProps.item.where" target="_">
                {{ slotProps.item.where }}
              </a>
            </li>
            <li v-else>
              {{ slotProps.item.where }}
            </li>
            <li class="custom-modality">
              {{ slotProps.item.from }}
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

<script lang="ts">
import { ref, defineComponent, Ref } from "vue";

export default defineComponent({
  setup() {
    let counter: number = 0;

    interface dataType {
      icon: string,
      what: string,
      date: string,
      activity: string
      where: string,
      from: string,
      skills: string,
    }

    const data: Ref<Array<dataType>> = ref([
      {
        icon: "pi pi-code",
        what: "Self Taught",
        date: "2021-Present",
        activity: "Software development",
        where: "https://www.mezdelex.com/",
        from: "Hybrid",
        skills: "Algorithms, Data Structures, Problem Solving, Rust, .NET 6, Entity Framework (Model/Code First), Fluent API, LINQ, Swagger UI, Fluent UI, C#10, Xamarin.Forms, .NET MAUI?, xUnit, Java JDK 11+, Spring Boot 2+, Hibernate, QueryDSL, HATEOAS, JUnit, Mockito, Gradle, Maven, Python 3+, OpenCV, C++20, Boost, RESTful API, Javascript ES6, Typescript, jQuery, React 18+, Vue 3 (Options API/Composition API), PrimeVUE, Animate CSS, Router, Store, YAML, OAuth2, OpenID, JWT, Docker, Heroku, Netlify, CD, MSSQL, MySQL, DBeaver, SSMS, Transact-SQL, Stored Procedures, Triggers, Visual Studio 2022, Visual Studio Code, Insomnia, Git, GitHub, Azure DevOps, Azure Active Directory, Microsoft Authentication Library (MSAL), Windows Terminal, Powershell Core, MVC, MVVM, DDD...",
      },
      {
        icon: "pi pi-code",
        what: "Ibermática",
        date: "2022-Present",
        activity: "Software development",
        where: "https://www.ibermatica.com/",
        from: "Remote",
        skills: ".NET 6, Entity Framework (Model/Code First), Fluent API, LINQ, Swagger UI, Fluent UI, C#10, Xamarin.Forms, .NET MAUI?, React 18, Javascript ES6, jQuery, Microsoft Dynamics 365, Power Platform, Git, Azure DevOps, Azure Active Directory, Microsoft Authentication Library (MSAL), Windows Terminal, PowerShell Core, MSSQL, SSMS, Transact-SQL, Stored Procedures, Triggers, Visual Studio 2022, Visual Studio Code, MVC, MVVM...",
      },
      {
        icon: "pi pi-code",
        what: "D&A Innovative Systems",
        date: "2021-2022",
        activity: "Software development",
        where: "https://www.innovative-systems.es/",
        from: "On-Site",
        skills: "Python, C++, HTML, CSS, Javascript, Electron, jQuery, Vue, PHP, Scripting, SQL, DBeaver, RabbitMQ, Git, GitHub, Windows Terminal, Powershell Core, VS Code, GNU/Linux, Bash, VirtualBox, Hercules, Domain Driven Development, Markdown, Holded, Bug Fixing, Time & Task Management...",
      },
      {
        icon: "pi pi-code",
        what: "Advanced Java Development & RDBMS",
        date: "2020-2021",
        activity: "Software development",
        where: "https://www.ipartek.com/",
        from: "Remote",
        skills: "Java JDK 8+, Javascript ES6, Tomcat, MySQL, MySQL Workbench, Eclipse, VS Code, Insomnia, JSP, Servlets, Git, MVC, JSON...",
      },
      {
        icon: "pi pi-code",
        what: "BBK Bootcamp Full Stack .NET Core",
        date: "2019-2020",
        activity: "Software development",
        where: "https://bbkbootcamp.com/",
        from: "Hybrid",
        skills: "C# .NET Core, Entity Framework, Javascript, HTML5, CSS3, jQuery, Bootstrap, Git, VS Code, VS, MSSQL, SSMS, Rest API, JWT, MVC, Insomnia/Postman, JSON...",
      },
      {
        icon: "pi pi-globe",
        what: "IT Technician",
        date: "2018-2019",
        activity: "Telecommunications",
        where: "Galitek S.L.",
        from: "On-Site",
        skills: "FTTH/CATV, Service Migrations, VoIP, Help Desk, Networking Solutions...",
      },
      {
        icon: "pi pi-globe",
        what: "Freelancer / IT Technician",
        date: "2015-2018",
        activity: "Telecommunications",
        where: "Fibrabide S.L.",
        from: "On-Site",
        skills: "FTTH/MacroLAN, Service Migrations, Help Desk, Networking Solutions...",
      },
      {
        icon: "pi pi-camera",
        what: "Freelancer / Graphic Designer / Photographer",
        date: "2014-2016",
        activity: "Photography & grahic design",
        where: "Demez Photo",
        from: "Hybrid",
        skills: "Photoshop, Illustrator, Lightroom, Logo Design, Marketing, Photo Manipulation, Branding, Album Design, Model Shooting, Weeding Management, Simple WEBs...",
      },
      {
        icon: "pi pi-camera",
        what: "Graphic Designer / Photographer",
        date: "2010-2014",
        activity: "Photography & grahic design",
        where: "https://www.prixmadigital.com/",
        from: "On-Site",
        skills: "Photoshop, Illustrator, Lightroom, Branding, Stock Photography, Album Design, Model Shooting, Weeding Management, Simple Joomla Web Designs...",
      },
      {
        icon: "pi pi-briefcase",
        what: "IT Technician",
        date: "2005-2007",
        activity: "HNC",
        where: "https://fpandramari.eus/",
        from: "On-Site",
        skills: "VoIP, Server Management, C, Structured Programming, Network Design, RF Applications...",
      },
    ]);

    const hasUrl: (value: string) => boolean = (value: string) => value.includes("https");
    const conditionalFade: () => string = () => {
      return counter++ % 2 !== 0
        ? "animate__animated animate__faster animate__fadeInLeft"
        : "animate__animated animate__faster animate__fadeInRight";
    };

    return { data, hasUrl, conditionalFade };
  },
});
</script>
