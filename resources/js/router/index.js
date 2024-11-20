import Dashboard from '@/Pages/Dashboard/dashboard.vue';
import Users from '@/Pages/Users/user.vue';
import Login from '@/Pages/Auth/Login.vue';
export default [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: { requiresAuth: true },

    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
    },
    {
        path: '/users',
        name: 'users',
        component: Users,
        meta: { requiresAuth: true },
    },
];
