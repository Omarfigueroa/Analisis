<template>
    <aside id="sidebar" :class="{ collapsed: isCollapsed }" class="p-3">
        <div class="logo-container text-center mb-4">
            <a href="/dashboard">
                <img src="@/assets/img/xtraentrega.png" alt="XtraEntregas" class="sidebar-logo expanded-logo">
                <img src="@/assets/img/icono.png" alt="Icono XtraEntregas" class="sidebar-logo collapsed-logo" style="display: none">
            </a>
        </div>
        <ul class="nav flex-column">
            <li class="nav-item">
                <Link href="/dashboard" class="nav-link d-flex align-items-center sidebar-link">
                    <i class="bi bi-house-door me-2"></i>
                    <span class="menu-text">Dashboard</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/users" class="nav-link d-flex align-items-center">
                    <i class="bi bi-person me-2"></i>
                    <span class="menu-text">Usuarios</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/operacion" class="nav-link d-flex align-items-center">
                    <i class="bi bi-cogs me-2"></i>
                    <span class="menu-text">Operación</span>
                </Link>
            </li>
        </ul>
    </aside>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
    name: "Sidebar",
    components: { Link },
    data() {
        return {
            isCollapsed: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
            document.getElementById("page-content-wrapper").classList.toggle("collapsed");
        },
    },
};
</script>
