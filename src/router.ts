import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CDT from "@/views/CDT.vue";
import MMSE from "@/views/MMSE.vue";
import CVFT from "@/views/CVFT.vue";
import Results from "@/views/Results.vue";
import Intro from "@/views/Intro.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Homepage",
        component: Intro
    },
    {
        path: "/CDT",
        name: "CDT",
        component: CDT
    },
    {
        path: "/MMSE",
        name: "MMSE",
        component: MMSE
    },
    {
        path: "/CVFT",
        name: "CVFT",
        component: CVFT
    },
    {
        path: "/Results",
        name: "Results",
        component: Results
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
