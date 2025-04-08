function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn i');

    sidebar.classList.toggle('collapsed');

    // Toggle icon based on the sidebar state
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.classList.remove('fa-angle-double-left');
        toggleBtn.classList.add('fa-angle-double-right');
    } else {
        toggleBtn.classList.remove('fa-angle-double-right');
        toggleBtn.classList.add('fa-angle-double-left');
    }
}



function autoCollapseSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn i");
    
    if (window.innerWidth <= 768) {
        sidebar?.classList.add("collapsed");

        // Change icon for collapsed state
        toggleBtn?.classList.remove('fa-angle-double-left');
        toggleBtn?.classList.add('fa-angle-double-right');
    }
}

document.addEventListener("DOMContentLoaded", autoCollapseSidebar);
