import {
    createRouter,
    createWebHashHistory,
    Router,
    RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/Timeline.vue"),
    },
    {
        path: "/projects",
        component: () => import("@/views/Projects.vue"),
    },
];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
