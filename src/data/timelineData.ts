import ITimeline from "@/models/ITimeline";
import { Activity, Icons, Reasons } from "@/enums/enums";

export const timelineData: Array<ITimeline> = [
    {
        icon: Icons.Code,
        title: "KPMG",
        date: `2023-2023 ${Reasons.Resign}`,
        activity: Activity.Development,
        where: "https://kpmg.com/",
        stack: ".NET 7, EF Core (Model First), LINQ, Fluent API, Fluent Validation, Swagger UI, C# 10+, xUnit, Fluent Assertions, Selenium, Razor, XAML, UWP, WinUI, UNO Platform, Docker, YAML, Javascript, jQuery, SQL Server, Stored Procedures, Triggers, DBeaver, Visual Studio Code, Visual Studio, Neovim, Git, Azure DevOps, Continuous Integration/Delivery, Windows Terminal, Powershell Core, Domain Driven Design, Clean Architecture, Model View Controller, Model View ViewModel, Unit of Work Pattern, Repository Pattern, Factory Pattern, CQRS Pattern...",
        tasks: [
            "Web applications development.",
            "Mobile applications development.",
            "Bug fixing.",
            "Azure DevOps pipeline workflows.",
            "Headless Selenium tests and xUnit tests automation.",
            "Pull request management.",
            "Agile development."
        ]
    },
    {
        icon: Icons.Code,
        title: "SmartWay Studio",
        date: `2022-2023 ${Reasons.Resign}`,
        activity: Activity.Development,
        where: "https://smartwaystudio.com/",
        stack: ".NET 6+, EF Core 6+ (Code First), LINQ, Fluent API, Swagger UI, C# 10+, xUnit, Hangfire, Redis, Docker, Kubernetes, YAML, Vue 3 (Composition API), Typescript, Vite, PrimeVue 3, Pinia, MySQL, Oracle, DBeaver, Neovim, Git, Azure DevOps, Domain Driven Design, Clean Architecture...",
        tasks: [
            "Tasks related to the development of certain modules of a microservice based enterprise management platform for an emerging national IT company.",
            "Bug fixing of the aforementioned platform.",
            "Pull request management.",
            "Code coverage with unit tests.",
            "Agile development."
        ]
    },
    {
        icon: Icons.Code,
        title: "Ibermática",
        date: `2022-2022 ${Reasons.Change}`,
        activity: Activity.Development,
        where: "https://ibermatica.com/",
        stack: ".NET 6, EF Core 6 (Model/Code First), LINQ, Fluent API, Swagger UI, Fluent UI, C# 10, Xamarin.Forms, React 18, Javascript ES6, jQuery, Microsoft Dynamics 365, Power Platform, Git, Azure DevOps, Azure Active Directory, Microsoft Authentication Library (MSAL), Windows Terminal, Powershell Core, SQL Server, SQL Server Management Studio, Transact-SQL, Stored Procedures, Triggers, Visual Studio 2022, Visual Studio Code, Model View Controller, Model View ViewModel...",
        tasks: [
            "Restructured the already created code first DB schema with the addition of required and missing tables based on the client requirements.",
            "Rewrote many parts and added others to the already created .NET MVC RESTful API.",
            "Rewrote many parts and added others to the already created .NET Xamarin.Forms MVVM mobile app.",
            "Created from scratch the ASP.NET Razor MVC web app to manage all the information generated from the mobile app and contained in the DB.",
            "Created the corresponding apps in Azure AD Identity Platform in order to allow authentication and authorization via MSAL between apps.",
            "Used Azure DevOps platform together with Git and Clockify for version control and backlog, task and time management."
        ]
    },
    {
        icon: Icons.Code,
        title: "D&A Innovative Systems",
        date: `2021-2022 ${Reasons.End}`,
        activity: Activity.Development,
        where: "https://innovative-systems.es/",
        stack: "Python, C++, HTML, CSS, Javascript, Electron, jQuery, Vue, PHP, Scripting, MariaDB, DBeaver, RabbitMQ, Git, GitHub, Windows Terminal, Powershell Core, Visual Studio Code, GNU/Linux, Bash, VirtualBox, Hercules, Domain Driven Design, CQRS, Clean Architecture, Markdown, Holded, Bug Fixing, Time & Task Management...",
        tasks: [
            "Created a scrapper written in Python to obtain all the information from a known wine forum and then processed the data against face recognition OpenCV library and international name database to determine age ranges and genre of potential target clients.",
            "Implemented new functionalities in the platform of the company for both backend and frontend improving the existing codebase.",
            "Added a completely new functionality from scratch which automated logistic status of different devices based on their geolocalized position with respect to a user defined location or moving entities.",
            "Other minor implementations and bug fixes."
        ]
    },
    {
        icon: Icons.Briefcase,
        title: "Advanced Java Development & RDBMS",
        date: "2020-2021",
        activity: Activity.Development,
        where: "https://ipartek.com/",
        stack: "Java JDK 8+, Javascript ES6, Tomcat, MySQL, MySQL Workbench, Eclipse, Visual Studio Code, Insomnia, Java Server Pages, Servlets, Git, Model View Controller, JSON...",
        tasks: []
    },
    {
        icon: Icons.Briefcase,
        title: "BBK Bootcamp Full Stack .NET Core",
        date: "2019-2020",
        activity: Activity.Development,
        where: "https://bbkbootcamp.com/",
        stack: ".NET Core, Entity Framework, Javascript, HTML5, CSS3, jQuery, Bootstrap, Git, Visual Studio Code, Visual Studio, MSSQL, SQL Server Management Studio, Rest API, JSON Web Tokens, Model View Controller, Insomnia/Postman, JSON...",
        tasks: []
    },
    {
        icon: Icons.Globe,
        title: "Galitek S.L.",
        date: `2018-2019 ${Reasons.Resign}`,
        activity: Activity.Telecommunications,
        where: "Galitek S.L.",
        stack: "",
        tasks: [
            "FTTH/CATV installations & configuration.",
            "Enterprise & private client service provider migrations.",
            "Help desk & client support.",
            "Networking solutions.",
            "VoIP solutions."
        ]
    },
    {
        icon: Icons.Globe,
        title: "Fibrabide S.L.",
        date: `2015-2018 ${Reasons.Change}`,
        activity: Activity.Telecommunications,
        where: "Fibrabide S.L.",
        stack: "",
        tasks: [
            "FTTH/MacroLAN installations & configuration.",
            "Enterprise & private client service provider migrations.",
            "Help desk & client support.",
            "Networking solutions."
        ]
    },
    {
        icon: Icons.Camera,
        title: "Freelance photographer",
        date: `2014-2016 ${Reasons.Change}`,
        activity: Activity.Photography,
        where: "Demez Photo",
        stack: "Photoshop, Illustrator, Lightroom, Bridge, Camera Raw, Joomla CMS...",
        tasks: [
            "Wedding management.",
            "Wedding album editing & design.",
            "Stock photography.",
            "Model shooting.",
            "Photography manipulation.",
            "Branding mockups & design.",
            "Simple websites."
        ]
    },
    {
        icon: Icons.Camera,
        title: "Prixma Digital",
        date: `2010-2014 ${Reasons.Resign}`,
        activity: Activity.Photography,
        where: "https://prixmadigital.com/",
        stack: "Photoshop, Illustrator, Lightroom, Bridge, Camera Raw...",
        tasks: [
            "Wedding management.",
            "Wedding album editing & design.",
            "Stock photography.",
            "Model shooting.",
            "Photography manipulation.",
            "Branding mockups & design."
        ]
    },
    {
        icon: Icons.Globe,
        title: "Dominion Global",
        date: `2008-2009 ${Reasons.End}`,
        activity: Activity.Telecommunications,
        where: "https://dominion-global.com/",
        stack: "",
        tasks: [
            "Couplet of telephone hoses.",
            "Power measurements in telecommunications facilities.",
            "Verification of network values in central splitters.",
            "Installation of telecommunications racks.",
            "Installation & configuration of telecommunications equipment."
        ]
    },
    {
        icon: Icons.Briefcase,
        title: "HND Telecommunications",
        date: "2005-2007",
        activity: Activity.Telecommunications,
        where: "https://fpandramari.eus/",
        stack: "C, Asterisk VoIP, Windows Server 2000, Windows XP, SUSE Linux...",
        tasks: [
            "VoIP services configuration.",
            "Active Directory management.",
            "Structured Programming.",
            "Network Design.",
            "RF Applications."
        ]
    }
];
