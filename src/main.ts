import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import App from "@/App.vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Fieldset from "primevue/fieldset";
import PrimeVue from "primevue/config";
import ScrollTop from "primevue/scrolltop";
import Sidebar from "primevue/sidebar";
import Timeline from "primevue/timeline";
import router from "@/router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import { faBriefcase, faCode, faFolder, faList } from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "animate.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/luna-amber/theme.css";

library.add(faBriefcase, faCode, faFolder, faList, faStackOverflow, faTwitch);

createApp(App)
    .use(PrimeVue, { ripple: true, })
    .use(router)
    .component("Accordion", Accordion)
    .component("AccordionTab", AccordionTab)
    .component("Button", Button)
    .component("Card", Card)
    .component("Fieldset", Fieldset)
    .component("ScrollTop", ScrollTop)
    .component("Sidebar", Sidebar)
    .component("Timeline", Timeline)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
