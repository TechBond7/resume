import {
    createRouter,
    createWebHashHistory
} from "vue-router";

const routes = [{
        path: "/",
        component: () => import("@/views/Timeline.vue")
    },
    {
        path: "/projects",
        component: () => import("@/views/Projects.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;