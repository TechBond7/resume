import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        component: () => import("@/views/Timeline.vue"),
        path: "/"
    },
    {
        component: () => import("@/views/Projects.vue"),
        path: "/projects"
    }
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
