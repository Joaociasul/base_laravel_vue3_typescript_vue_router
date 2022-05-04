import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./vue/views/Home.vue";
import About from "./vue/views/About.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home page",
        component: Home,
    },
    {
        path: "/about",
        name: "About page",
        component: About,
        children: [
            {
                path: "teste",
                component: About,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((el) =>  {
})

export default router;
