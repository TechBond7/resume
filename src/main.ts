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

import "primevue/resources/themes/luna-amber/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css"
import "animate.css";

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
    .mount("#app");