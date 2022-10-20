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
          </ul>
          <Accordion>
            <AccordionTab header="Stack">
              <p class="accordionText">
                {{ slotProps.item.stack }}
              </p>
            </AccordionTab>
          </Accordion>
          <Accordion v-if="slotProps.item.tasks.length != 0">
            <AccordionTab header="Tasks">
              <p class="accordionText" v-for="task in slotProps.item.tasks">
              <p>
                {{ task }}
              </p>
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
      stack: string,
      tasks: string[]
    }

    const data: Ref<Array<dataType>> = ref([
      {
        icon: "pi pi-code",
        what: "Self Taught",
        date: "2021-Present",
        activity: "Software development",
        where: "https://www.mezdelex.com/",
        stack: "Algorithms, Data Structures, Problem Solving, Rust, .NET 6, Entity Framework (Model/Code First), Fluent API, LINQ, Swagger UI, Fluent UI, C#10, Xamarin.Forms, .NET MAUI?, xUnit, Java JDK 11+, Spring Boot 2+, Hibernate, QueryDSL, HATEOAS, JUnit, Mockito, Gradle, Maven, Python 3+, OpenCV, C++20, Boost, RESTful API, Javascript ES6, Typescript, jQuery, React 18+, Vue 3 (Options API/Composition API), PrimeVUE, Animate CSS, Router, Store, OAuth2, OpenID, JWT, Docker, Heroku, Netlify, CI/CD, YAML, Markdown, MSSQL, MySQL, DBeaver, SSMS, Transact-SQL, Stored Procedures, Triggers, Visual Studio 2022, Visual Studio Code, Insomnia, Git, GitHub, GitHub Actions, Azure DevOps, Azure Active Directory, Microsoft Authentication Library (MSAL), Windows Terminal, Powershell Core, MVC, MVVM, DDD...",
        tasks: []
      },
      {
        icon: "pi pi-code",
        what: "Ibermática",
        date: "2022-Present",
        activity: "Software development",
        where: "https://www.ibermatica.com/",
        stack: ".NET 6, Entity Framework (Model/Code First), Fluent API, LINQ, Swagger UI, Fluent UI, C#10, Xamarin.Forms, .NET MAUI?, React 18, Javascript ES6, jQuery, Microsoft Dynamics 365, Power Platform, Git, Azure DevOps, Azure Active Directory, Microsoft Authentication Library (MSAL), Windows Terminal, PowerShell Core, MSSQL, SSMS, Transact-SQL, Stored Procedures, Triggers, Visual Studio 2022, Visual Studio Code, MVC, MVVM...",
        tasks: ["1. Restructured the already created code first DB schema with the addition of required and missing tables based on the client requirements.", "2. Rewrote many parts and added others to the already created .NET MVC RESTful API.", "3. Rewrote many parts and added others to the already created .NET Xamarin.Forms MVVM mobile app.", "4. Created from scratch the ASP.NET Razor MVC web app to manage all the information generated from the mobile app and contained in the DB.", "5. Created the corresponding apps in Azure AD Identity Platform in order to allow authentication and authorization via MSAL between apps.", "6. Used Azure DevOps platform together with Git and Clockify for version control and backlog, task and time management."]
      },
      {
        icon: "pi pi-code",
        what: "D&A Innovative Systems",
        date: "2021-2022",
        activity: "Software development",
        where: "https://www.innovative-systems.es/",
        stack: "Python, C++, HTML, CSS, Javascript, Electron, jQuery, Vue, PHP, Scripting, SQL, DBeaver, RabbitMQ, Git, GitHub, Windows Terminal, Powershell Core, VS Code, GNU/Linux, Bash, VirtualBox, Hercules, Domain Driven Development, Markdown, Holded, Bug Fixing, Time & Task Management...",
        tasks: ["1. Created a scrapper written in Python to obtain all the information from a known wine forum and then processed the data against face recognition OpenCV library and international name database to determine age ranges and genre of potential target clients.", "2. Implemented new functionalities in the platform of the company for both backend and frontend improving the existing codebase.", "3. Added a completely new functionality from scratch which automated logistic status of different devices based on their geolocalized position with respect to a user defined location or moving entities.", "4. Other minor implementations and bug fixes."]
      },
      {
        icon: "pi pi-code",
        what: "Advanced Java Development & RDBMS",
        date: "2020-2021",
        activity: "Software development",
        where: "https://www.ipartek.com/",
        stack: "Java JDK 8+, Javascript ES6, Tomcat, MySQL, MySQL Workbench, Eclipse, VS Code, Insomnia, JSP, Servlets, Git, MVC, JSON...",
        tasks: []
      },
      {
        icon: "pi pi-code",
        what: "BBK Bootcamp Full Stack .NET Core",
        date: "2019-2020",
        activity: "Software development",
        where: "https://bbkbootcamp.com/",
        stack: "C# .NET Core, Entity Framework, Javascript, HTML5, CSS3, jQuery, Bootstrap, Git, VS Code, VS, MSSQL, SSMS, Rest API, JWT, MVC, Insomnia/Postman, JSON...",
        tasks: []
      },
      {
        icon: "pi pi-globe",
        what: "IT Technician",
        date: "2018-2019",
        activity: "Telecommunications",
        where: "Galitek S.L.",
        stack: "FTTH/CATV, Service Migrations, VoIP, Help Desk, Networking Solutions...",
        tasks: []
      },
      {
        icon: "pi pi-globe",
        what: "Freelancer / IT Technician",
        date: "2015-2018",
        activity: "Telecommunications",
        where: "Fibrabide S.L.",
        stack: "FTTH/MacroLAN, Service Migrations, Help Desk, Networking Solutions...",
        tasks: []
      },
      {
        icon: "pi pi-camera",
        what: "Freelancer / Graphic Designer / Photographer",
        date: "2014-2016",
        activity: "Photography & grahic design",
        where: "Demez Photo",
        stack: "Photoshop, Illustrator, Lightroom, Logo Design, Marketing, Photo Manipulation, Branding, Album Design, Model Shooting, Weeding Management, Simple WEBs...",
        tasks: []
      },
      {
        icon: "pi pi-camera",
        what: "Graphic Designer / Photographer",
        date: "2010-2014",
        activity: "Photography & grahic design",
        where: "https://www.prixmadigital.com/",
        stack: "Photoshop, Illustrator, Lightroom, Branding, Stock Photography, Album Design, Model Shooting, Weeding Management, Simple Joomla Web Designs...",
        tasks: []
      },
      {
        icon: "pi pi-briefcase",
        what: "IT Technician",
        date: "2005-2007",
        activity: "HNC",
        where: "https://fpandramari.eus/",
        stack: "VoIP, Server Management, C, Structured Programming, Network Design, RF Applications...",
        tasks: []
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
