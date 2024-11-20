import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp,h } from 'vue';
import {createInertiaApp} from "@inertiajs/vue3";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/index';
import("./assets/js/dashboard.js");

const router = createRouter({
    history: createWebHistory(),
    routes,
});
createInertiaApp({
    resolve:name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        return pages[`./Pages/${name}.vue`] || pages[`./Pages/${name}/*.vue`];

    },
    setup({el,App,props,plugin}){
        createApp({render:()=> h(App,props)})
            .use(plugin)
            .use(router)
            .mount(el)
    },
});
document.addEventListener("DOMContentLoaded", function () {
    const protectedPaths = ['/dashboard', '/users'];
    const redirectMap = {
        '/dashboard': '/',
        '/users': '/',

    };

    protectRoutes(protectedPaths, redirectMap);
});
function isTokenValid(token) {
    if (!token) return false;

    const parts = token.split('.');
    if (parts.length !== 3) return false;

    try {
        const payload = JSON.parse(atob(parts[1]));
        const now = Math.floor(Date.now() / 1000);
        return payload.exp && payload.exp > now;
    } catch (e) {
        return false;
    }
}
function protectRoutes(protectedPaths) {
    const authToken = localStorage.getItem('jwt_token');
    const currentPath = window.location.pathname;
    if (!isTokenValid(authToken)) {
        if (protectedPaths.includes(currentPath)) {
            window.location.href = '/';
        }
        return;
    }
    if (authToken && currentPath === '/') {
        window.location.href = '/dashboard';
    }
}
