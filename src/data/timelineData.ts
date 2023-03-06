import ITimeline from "@/models/ITimeline";
import { Activity, Icons } from "@/enums/enums";

export const timelineData: Array<ITimeline> = [
  {
    icon: Icons.Code,
    title: "KPMG",
    date: "2023-Present",
    activity: Activity.Development,
    where: "https://kpmg.com/",
    stack:
      ".NET 6+, .NET MAUI, EF Core 6+ (Code First), LINQ, Fluent API, Swagger UI, C# 10+, xUnit, Razor, Blazor, XAML, Xamarin.Forms, Docker, YAML, Javascript, Typescript, jQuery, MSSQL, DBeaver, Visual Studio, Neovim, Git, Azure DevOps, Domain Driven Design, Clean Architecture, Model View Controller, Model View ViewModel...",
    tasks: ["Pending..."],
  },
  {
    icon: Icons.Code,
    title: "SmartWay Studio",
    date: "2022-2023",
    activity: Activity.Development,
    where: "https://smartwaystudio.com/",
    stack:
      ".NET 6+, EF Core 6+ (Code First), LINQ, Fluent API, Swagger UI, C# 10+, xUnit, Hangfire, Redis, Docker, Kubernetes, YAML, Vue 3 (Composition API), Typescript, Vite, PrimeVue 3, Pinia, MySQL, Oracle, DBeaver, Neovim, Git, Azure DevOps, Domain Driven Design, Clean Architecture...",
    tasks: [
      "1. Tasks related to the development of certain modules of a microservice based enterprise management platform for an emerging national IT company.",
      "2. Bug fixing of the aforementioned platform.",
      "3. Pull request management.",
      "4. Code coverage with unit tests.",
      "5. Agile development.",
    ],
  },
  {
    icon: Icons.Code,
    title: "Ibermática",
    date: "2022-2022 ",
    activity: Activity.Development,
    where: "https://ibermatica.com/",
    stack:
      ".NET 6, EF Core 6 (Model/Code First), LINQ, Fluent API, Swagger UI, Fluent UI, C# 10, Xamarin.Forms, React 18, Javascript ES6, jQuery, Microsoft Dynamics 365, Power Platform, Git, Azure DevOps, Azure Active Directory, Microsoft Authentication Library (MSAL), Windows Terminal, PowerShell Core, MSSQL, SSMS, Transact-SQL, Stored Procedures, Triggers, Visual Studio 2022, Visual Studio Code, Model View Controller, Model View ViewModel...",
    tasks: [
      "1. Restructured the already created code first DB schema with the addition of required and missing tables based on the client requirements.",
      "2. Rewrote many parts and added others to the already created .NET MVC RESTful API.",
      "3. Rewrote many parts and added others to the already created .NET Xamarin.Forms MVVM mobile app.",
      "4. Created from scratch the ASP.NET Razor MVC web app to manage all the information generated from the mobile app and contained in the DB.",
      "5. Created the corresponding apps in Azure AD Identity Platform in order to allow authentication and authorization via MSAL between apps.",
      "6. Used Azure DevOps platform together with Git and Clockify for version control and backlog, task and time management.",
    ],
  },
  {
    icon: Icons.Code,
    title: "D&A Innovative Systems",
    date: "2021-2022",
    activity: Activity.Development,
    where: "https://innovative-systems.es/",
    stack:
      "Python, C++, HTML, CSS, Javascript, Electron, jQuery, Vue, PHP, Scripting, MariaDB, DBeaver, RabbitMQ, Git, GitHub, Windows Terminal, Powershell Core, Visual Studio Code, GNU/Linux, Bash, VirtualBox, Hercules, Domain Driven Design, CQRS, Clean Architecture, Markdown, Holded, Bug Fixing, Time & Task Management...",
    tasks: [
      "1. Created a scrapper written in Python to obtain all the information from a known wine forum and then processed the data against face recognition OpenCV library and international name database to determine age ranges and genre of potential target clients.",
      "2. Implemented new functionalities in the platform of the company for both backend and frontend improving the existing codebase.",
      "3. Added a completely new functionality from scratch which automated logistic status of different devices based on their geolocalized position with respect to a user defined location or moving entities.",
      "4. Other minor implementations and bug fixes.",
    ],
  },
  {
    icon: Icons.Briefcase,
    title: "Advanced Java Development & RDBMS",
    date: "2020-2021",
    activity: Activity.Development,
    where: "https://ipartek.com/",
    stack:
      "Java JDK 8+, Javascript ES6, Tomcat, MySQL, MySQL Workbench, Eclipse, Visual Studio Code, Insomnia, Java Server Pages, Servlets, Git, Model View Controller, JSON...",
    tasks: [],
  },
  {
    icon: Icons.Briefcase,
    title: "BBK Bootcamp Full Stack .NET Core",
    date: "2019-2020",
    activity: Activity.Development,
    where: "https://bbkbootcamp.com/",
    stack:
      ".NET Core, Entity Framework, Javascript, HTML5, CSS3, jQuery, Bootstrap, Git, Visual Studio Code, Visual Studio, MSSQL, SQL Server Management Studio, Rest API, JSON Web Tokens, Model View Controller, Insomnia/Postman, JSON...",
    tasks: [],
  },
];
