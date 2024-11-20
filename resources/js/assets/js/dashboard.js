document.addEventListener("DOMContentLoaded", function () {
    const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
    const sidebar = document.getElementById("sidebar");
    const pageContentWrapper = document.getElementById("page-content-wrapper");

    console.log(localStorage.getItem('jwt_token'));
    if(toggleSidebarBtn){
        toggleSidebarBtn.addEventListener("click", function () {
            sidebar.classList.toggle("collapsed");
            pageContentWrapper.classList.toggle("collapsed");
        });
    }
    if (window.history && window.history.pushState) {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function () {
            window.history.pushState(null, null, window.location.href);
        };
    }
    document.querySelectorAll('#sidebar .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('#sidebar .nav-link').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth <= 768) {
                sidebar.classList.add("collapsed");
                pageContentWrapper.classList.add("collapsed");
            }
        });
        link.addEventListener('mouseenter', function () {
            if (sidebar.classList.contains('collapsed')) {
                this.classList.add('hover-active');
            }
        });
        link.addEventListener('mouseleave', function () {
            this.classList.remove('hover-active');
        });
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            sidebar.classList.add("collapsed");
            pageContentWrapper.classList.add("collapsed");
        } else {
            sidebar.classList.remove("collapsed");
            pageContentWrapper.classList.remove("collapsed");
        }
    });
    if (window.innerWidth <= 768) {
        sidebar.classList.add("collapsed");
        pageContentWrapper.classList.add("collapsed");
    }

});
