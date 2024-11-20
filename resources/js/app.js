import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp,h } from 'vue';
import {createInertiaApp} from "@inertiajs/vue3";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/index';


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
    const authToken = localStorage.getItem('jwt_token'); // Supongamos que almacenas el token en localStorage
    if (authToken) {
        if (window.location.pathname === '/') {
            window.location.href = '/dashboard';
        }
    } else {
        if (window.location.pathname === '/dashboard') {
            window.location.href = '/';
        }
    }
    if (window.location.pathname.startsWith("/dashboard")) {
        import("./assets/js/dashboard.js").then((module) => {
            
        });
    }
});
