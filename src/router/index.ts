import {
    createRouter,
    createWebHashHistory,
    Router
} from "vue-router";

const routes = [{
    path: "/",
    component: () => import("@/views/Timeline.vue")
},
{
    path: "/projects",
    component: () => import("@/views/Projects.vue")
}];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;