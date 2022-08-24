import {
    createApp
} from "vue";
import App from "@/App.vue";
import router from "@/router";
import PrimeVue from "primevue/config";
import Timeline from "primevue/timeline";
import Card from "primevue/card";
import Sidebar from "primevue/sidebar";
import Fieldset from "primevue/fieldset";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Button from "primevue/button";
import ScrollTop from "primevue/scrolltop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimeline, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "primevue/resources/themes/luna-amber/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css"
import "animate.css";

library.add(faTimeline, faFileCode);

createApp(App)
    .use(router)
    .use(PrimeVue, {
        ripple: true
    })
    .component("Timeline", Timeline)
    .component("Card", Card)
    .component("Sidebar", Sidebar)
    .component("Fieldset", Fieldset)
    .component("Accordion", Accordion)
    .component("AccordionTab", AccordionTab)
    .component("Button", Button)
    .component("ScrollTop", ScrollTop)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");