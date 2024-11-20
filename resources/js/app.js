import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp,h } from 'vue';
import {createInertiaApp} from "@inertiajs/vue3";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/index';

console.log(localStorage);

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
    const authToken = localStorage.getItem('auth_token'); // Supongamos que almacenas el token en localStorage

    window.onpopstate = function () {
        if (authToken) {
            // Si el usuario está autenticado, redirige al dashboard
            if (window.location.pathname === '/login') {
                window.location.href = '/dashboard';
            }
        } else {
            // Si no hay sesión activa, redirige al login
            if (window.location.pathname === '/dashboard') {
                window.location.href = '/login';
            }
        }
    };
    if (window.location.pathname.startsWith("/dashboard")) {
        import("./assets/js/dashboard.js").then((module) => {
            console.log("Dashboard script loaded");
        });
    }
});
