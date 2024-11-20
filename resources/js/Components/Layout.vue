<template>
    <div id="layout" class="d-flex flex-column">
        <div class="layout-body d-flex">
            <Sidebar :is-collapsed="isSidebarCollapsed" />
            <main id="page-content-wrapper" :class="{ collapsed: isSidebarCollapsed }" class="flex-grow-1 bg-light">
                <Header @toggle-sidebar="toggleSidebar" />
                <slot />
            </main>
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from "@/Components/Header.vue";
import Sidebar from "@/Components/Sidebar.vue";
import Footer from "@/Components/Footer.vue";


export default {
    components: {
        Header,
        Sidebar,
        Footer,
    },
    data() {
        return {
            isSidebarCollapsed: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
    },
};
</script>

