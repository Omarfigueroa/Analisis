<template>
    <header class="d-flex justify-content-between header align-items-center bg-light py-2 px-3 border-bottom shadow-sm">
        <div class="header-left d-flex align-items-center">
            <button  id="toggleSidebarBtn"  class="btn btn-light me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
        </div>
        <div class="header-user dropdown">
            <button class="btn btn-light d-flex align-items-center" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="h-8 w-8 rounded-circle me-2" src="" />
                <span class="me-2 text-gray-700">usuario</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li><a class="dropdown-item" href="#">Perfil</a></li>
                <li><a class="dropdown-item" href="#" @click="logout">Cerrar sesión</a></li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    name: "Header",
    methods: {
        logout() {
            localStorage.removeItem("auth_token");
            window.location.href = "/logout";
        },
    },
};

</script>
